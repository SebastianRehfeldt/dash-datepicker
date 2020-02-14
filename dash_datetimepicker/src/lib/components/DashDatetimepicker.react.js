import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatetimeRangePicker from '../utils/DatePickerRange.jsx';

/**
 * Dash Datetime Range Picker is a component for selecting two dates (including times).
 * It takes `startDate` and `endDate` as main properties and renders two inputs
 * which open datepickers when they are clicked.
 */
export default class DashDatetimepicker extends Component {
    render() {
        let startDate = DashDatetimepicker.defaultProps.startDate;
        let endDate = DashDatetimepicker.defaultProps.endDate;
        if (this.props.startDate === startDate) {
            this.props.setProps({startDate: startDate.toISOString()});
        }
        if (this.props.endDate === endDate) {
            this.props.setProps({endDate: endDate.toISOString()});
        }
        return (
            <DatetimeRangePicker
                {...this.props}
                onEndDateChange={e =>
                    this.props.setProps({endDate: e.toISOString()})
                }
                onStartDateChange={e =>
                    this.props.setProps({startDate: e.toISOString()})
                }
            />
        );
    }
}

DashDatetimepicker.defaultProps = {
    startDate: new Date(new Date() - 1000 * 60 * 60 * 24),
    endDate: new Date(),
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
     * The endDate of the range picker. It will fire a dash callback if it is updated.
     */
    endDate: PropTypes.oneOfType([
        PropTypes.instanceOf(moment),
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]),
    /**
     * The startDate of the range picker. It will fire a dash callback if it is updated.
     */
    startDate: PropTypes.oneOfType([
        PropTypes.instanceOf(moment),
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]),
};

export const propTypes = DashDatetimepicker.propTypes;
