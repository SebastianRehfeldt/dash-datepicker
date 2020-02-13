import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatetimeRangePicker from '../utils/DatePickerRange.jsx';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashDatetimepicker extends Component {
    render() {
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
    startDate: new Date(),
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
    endDate: PropTypes.oneOfType([
        PropTypes.instanceOf(moment),
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]),
    startDate: PropTypes.oneOfType([
        PropTypes.instanceOf(moment),
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]),
};

export const propTypes = DashDatetimepicker.propTypes;
