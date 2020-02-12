import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatetimeRangePicker from 'react-datetime-range-picker';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashDatetimepicker extends Component {
    render() {
        console.log(this);
        return (
            <DatetimeRangePicker
                id={this.props.id}
                value={this.props.value}
                onEndDateChange={e =>
                    this.props.setProps({endDate: e.toISOString()})
                }
                onStartDateChange={e =>
                    this.props.setProps({startDate: e.toISOString()})
                }
                onChange={e =>
                    this.props.setProps({
                        value: {
                            startDate: e['start'].toISOString(),
                            endDate: e['end'].toISOString(),
                        },
                    })
                }
            />
        );
    }
}

DashDatetimepicker.defaultProps = {};

DashDatetimepicker.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.shape({
        startDate: PropTypes.string,
        endDate: PropTypes.string,
    }),

    /**
     * The value displayed in the input.
     */
    startDate: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    endDate: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
