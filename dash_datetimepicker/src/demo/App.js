/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashDatetimepicker, DashDatetimepickerSingle } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <h1>Range Picker</h1>
                <DashDatetimepicker
                    setProps={this.setProps}
                    {...this.state}
                />
                <h1>Single Picker</h1>
                <DashDatetimepickerSingle
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
