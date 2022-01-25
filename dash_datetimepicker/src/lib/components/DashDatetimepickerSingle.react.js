import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';

/**
 * Dash Datetime Single Picker is a component for selecting a single date + time.
 */
export default class DashDatetimepicker extends Component {
    renderDay(props, currentDate) {
        const {className, ...rest} = props;

        // Add rdtActive to selected date
        let classes = props.className;
        classes =
            this.state &&
            moment(props.key, 'M_D').isSame(this.state.date, 'day')
                ? `${classes} rdtActive`
                : classes;

        return (
            <td {...rest} className={classes}>
                {currentDate.date()}
            </td>
        );
    }

    onChange(date) {
        if (typeof date === 'string') {
            return;
        }

        this.setState({
            date: date,
        });
        this.props.setProps({date: date.toISOString()});
    }

    render() {
        return (
            <div id={this.props.id}>
                <Datetime
                    {...this.props}
                    initialValue={this.props.date}
                    onChange={this.onChange.bind(this)}
                    renderDay={this.renderDay.bind(this)}
                />
            </div>
        );
    }
}

DashDatetimepicker.defaultProps = {
    date: new Date(),
    utc: false,
    locale: null,
};

DashDatetimepicker.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
    /**
     * The date of the range picker. It will fire a dash callback if it is updated.
     */
    date: PropTypes.oneOfType([
        PropTypes.instanceOf(moment),
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]),
    /**
     * When true, input time values will be interpreted as UTC (Zulu time) by Moment.js. Otherwise they will default to the user's local timezone.
     */
    utc: PropTypes.bool,
    /**
     * Manually set the locale for the react-datetime instance. Moment.js locale needs to be loaded to be used, see i18n docs.
     */
    locale: PropTypes.string,
};

export const propTypes = DashDatetimepicker.propTypes;
export const defaultProps = DashDatetimepicker.defaultProps;
