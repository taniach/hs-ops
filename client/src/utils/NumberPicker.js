import React from 'react';
import NumberInput from 'semantic-ui-react-numberinput';

export class NumberPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '0'
        };
    }
    
    changeValue = (newValue) => {
        this.setState({ value: newValue });
    }
   
    render() {
        return (
            <NumberInput value={this.state.value} onChange={this.changeValue} />
        );
    }
}