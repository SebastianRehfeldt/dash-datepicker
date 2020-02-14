/* eslint 'react/sort-comp': off, 'react/jsx-no-bind': off */

import React, {Component} from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import {
    propTypes,
    defaultProps,
} from '../components/DashDatetimepicker.react.js';

export default class DatetimeRangePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start: null,
            end: null,
            startDate: null,
            endDate: null,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return nextProps.startDate === prevState.startDate &&
            nextProps.endDate === prevState.endDate
            ? {}
            : {
                  start: moment(nextProps.startDate) || moment(),
                  end: moment(nextProps.endDate) || moment(),
                  startDate: nextProps.startDate,
                  endDate: nextProps.endDate,
              };
    }

    getInputProps() {
        const inputReadOnlyStyle = {
            cursor: 'pointer',
            backgroundColor: 'white',
            border: '1px solid #e2e2e2',
        };

        return this.props.input
            ? this.props.inputProps
            : {
                  input: true,
                  inputProps: {
                      ...this.props.inputProps, // merge inputProps with default
                      readOnly: true,
                      style: inputReadOnlyStyle,
                  },
              };
    }

    propsToPass() {
        return {
            end: this.state.end.toDate(),
            start: this.state.start.toDate(),
        };
    }

    calcBaseProps() {
        return {
            utc: this.props.utc,
            locale: this.props.locale,
            input: !this.props.inline,
            viewMode: this.props.viewMode,
            dateFormat: this.props.dateFormat,
            timeFormat: this.props.timeFormat,
            closeOnTab: this.props.closeOnTab,
            className: this.props.pickerClassName,
            closeOnSelect: this.props.closeOnSelect,
        };
    }

    calcStartTimeProps() {
        const baseProps = this.calcBaseProps();
        const inputProps = this.getInputProps();

        return {
            ...baseProps,
            ...inputProps,
            value: this.state.start,
            onBlur: this.props.onStartDateBlur,
            onFocus: this.props.onStartDateFocus,
            timeConstraints: this.props.startTimeConstraints,
        };
    }

    calcEndTimeProps() {
        const baseProps = this.calcBaseProps();
        const inputProps = this.getInputProps();

        return {
            ...baseProps,
            ...inputProps,
            onBlur: this.props.onEndDateBlur,
            value: this.state.end,
            onFocus: this.props.onEndDateFocus,
            timeConstraints: this.props.endTimeConstraints,
        };
    }

    validateMinDate(date) {
        return this.state.start.isSameOrBefore(date, 'day');
    }

    isValidEndDate(currentDate, selectedDate) {
        return (
            this.validateMinDate(currentDate) &&
            this.props.isValidEndDate(currentDate, selectedDate)
        );
    }

    onStartDateChange(date) {
        if (typeof date === 'string') {
            return;
        }

        const options = {
            start: date,
        };

        if (this.state.end.isBefore(date)) {
            options.end = date.add(1, 'd');
        }

        this.setState(options, () => {
            this.props.onChange(this.propsToPass());
            this.props.onStartDateChange(this.propsToPass().start);
        });
    }

    onEndDateChange(date) {
        if (typeof date === 'string') {
            return;
        }

        this.setState({end: date}, () => {
            this.props.onChange(this.propsToPass());
            this.props.onEndDateChange(this.propsToPass().end);
        });
    }

    onFocus() {
        this.props.onFocus();
    }

    onBlur() {
        this.props.onBlur(this.propsToPass());
    }

    renderDay(props, currentDate) {
        const {start, end} = this.state;
        const {className, ...rest} = props;
        const date = moment(props.key, 'M_D');

        // style all dates in range
        let classes = date.isBetween(start, end, 'day')
            ? `${props.className} in-selecting-range`
            : props.className;

        // add rdtActive to selected startdate and endDate in pickers
        classes =
            date.isSame(start, 'day') || date.isSame(end, 'day')
                ? `${classes} rdtActive`
                : classes;

        return (
            <td {...rest} className={classes}>
                {currentDate.date()}
            </td>
        );
    }
    render() {
        const startProps = this.calcStartTimeProps();
        const endProps = this.calcEndTimeProps();

        return (
            <div
                className={'datepicker-div ' + this.props.className}
                onFocus={this.onFocus.bind(this)}
                onBlur={this.onBlur.bind(this)}
            >
                <Datetime
                    {...startProps}
                    isValidDate={this.props.isValidStartDate}
                    onChange={this.onStartDateChange.bind(this)}
                    renderDay={this.renderDay.bind(this)}
                />

                <div className="datepicker-arrow">
                    <svg focusable="false" viewBox="0 0 1000 1000">
                        <path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z" />
                    </svg>
                </div>

                <Datetime
                    {...endProps}
                    isValidDate={this.isValidEndDate.bind(this)}
                    onChange={this.onEndDateChange.bind(this)}
                    renderDay={this.renderDay.bind(this)}
                />
            </div>
        );
    }
}

DatetimeRangePicker.defaultProps = {
    ...defaultProps,
    utc: false,
    locale: null,
    input: false,
    inline: false,
    className: '',
    viewMode: 'days',
    dateFormat: true,
    timeFormat: true,
    closeOnTab: true,
    onBlur: () => {},
    onFocus: () => {},
    onChange: () => {},
    pickerClassName: '',
    closeOnSelect: false,
    inputProps: undefined,
    onEndDateBlur: () => {},
    endTimeConstraints: {},
    onEndDateFocus: () => {},
    isValidStartDate: () => true,
    isValidEndDate: () => true,
    onStartDateBlur: () => {},
    onEndDateChange: () => {},
    onStartDateFocus: () => {},
    startTimeConstraints: {},
    onStartDateChange: () => {},
};

DatetimeRangePicker.propTypes = {
    ...propTypes,
    /**
     * When true, start and end time values will be interpreted as UTC.
     * Otherwise they will default to the user's local timezone.
     */
    utc: PropTypes.bool,
    /**
     * This defines whether or not to allow user to manually edit date via input field.
     */
    input: PropTypes.bool,
    /**
     * If set to true will render start date and end date with calender without input fields.
     */
    inline: PropTypes.bool,
    /**
     * This callback is triggered when user clicks outside the datetime range picker.
     * The callback receives an object with the selected start and date date as only parameter.
     */
    onBlur: PropTypes.func,
    /**
     * This callback is triggered when user clicks anywhere inside the outermost element of the picker.
     */
    onFocus: PropTypes.func,
    /**
     * Manually set the locale.
     */
    locale: PropTypes.string,
    /**
     * This callback is triggered everytime a user selects a start date or an end date from the picker.
     */
    onChange: PropTypes.func,
    /**
     * This defines the default view to display when the pickers are shown. ('years', 'months', 'days', 'time').
     */
    viewMode: PropTypes.oneOf(['years', 'months', 'days', 'time']),
    /**
     * When true and the input is focused, pressing the tab key will close the datepicker.
     */
    closeOnTab: PropTypes.bool,
    /**
     * CSS class(es) for the outermost markup element.
     */
    className: PropTypes.string,
    /**
     * Defines additional attributes for the input element of the component.
     * For example: placeholder, disabled, required, name and className (className sets the class attribute for the input element).
     * This applies to both the start and end datetime inputs
     */
    inputProps: PropTypes.object, // eslint-disable-line
    /**
     * When true, once the day has been selected, the datepicker will be automatically closed.
     * This is useful when using this as a date range picker instead of datetime range picker.
     */
    closeOnSelect: PropTypes.bool,
    /**
     * Define the dates that can be selected in the end date picker.
     * The function receives (currentDate, selectedDate) and shall return a true or false whether the currentDate is valid or not.
     */
    isValidEndDate: PropTypes.func,
    /**
     * Define the dates that can be selected in the start date picker.
     * The function receives (currentDate, selectedDate) and shall return a true or false whether the currentDate is valid or not.
     */
    isValidStartDate: PropTypes.func,
    /**
     * Callback is triggered when user clicks outside the end date input.
     * The callback receives the selected moment object as only parameter, if the date in the input is valid.
     * If the date in the input is not valid, the callback returned.
     */
    onEndDateBlur: PropTypes.func,
    /**
     * Callback trigger for when the user opens the end date datepicker.
     */
    onEndDateFocus: PropTypes.func,
    /**
     * This callback is triggered everytime the end date changes.
     * It receives the selected date as the only parameter.
     */
    onEndDateChange: PropTypes.func,
    /**
     * This callback is triggered when user clicks outside of the start date input.
     * The callback receives the selected start date as the a parameter
     */
    onStartDateBlur: PropTypes.func,
    /**
     * Callback trigger for when the user opens the end date datepicker.
     */
    onStartDateFocus: PropTypes.func,
    /**
     * Callback trigger for when start date changes.
     * This callback receives selected moment object as a parameter.
     */
    onStartDateChange: PropTypes.func,
    /**
     * CSS class to attach to outer div that wraps the individual pickers.
     * This class is applied to both the start and end pickers.
     * This is particular useful if you want to add col-*.
     */
    pickerClassName: PropTypes.string,
    /**
     * Add some constraints to the end timepicker.
     * It accepts an object with the format { hours: { min: 9, max: 15, step: 2 }},
     * this example means the hours can't be lower than 9 and higher than 15,
     * and it will change adding or subtracting 2 hours everytime the buttons are clicked.
     * The constraints can be added to the hours, minutes, seconds and milliseconds.
     */
    endTimeConstraints: PropTypes.object, // eslint-disable-line
    /**
     * Add some constraints to the start timepicker.
     * It accepts an object with the format { hours: { min: 9, max: 15, step: 2 }},
     * this example means the hours can't be lower than 9 and higher than 15,
     * and it will change adding or subtracting 2 hours everytime the buttons are clicked.
     * The constraints can be added to the hours, minutes, seconds and milliseconds.
     */
    startTimeConstraints: PropTypes.object, // eslint-disable-line
    /**
     * Defines the format for the date.
     * It accepts any Moment date format (not in localized format).
     * If true the date will be displayed using the defaults for the current locale.
     * If false the datepicker is disabled and the component can be used as timepicker.
     */
    dateFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * Defines the format for the time.
     * It accepts any Moment time format (not in localized format).
     * If true the time will be displayed using the defaults for the current locale.
     * If false the timepicker is disabled and the component can be used as datepicker.
     */
    timeFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
