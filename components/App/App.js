import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';

import BarChart from '../BarChart/BarChart';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    
    render() {
        return (
            <View>
                <TextInput 
                    placeholder='Введите текст'
                    onChangeText={text => this.setState({text})}
                />
                <Button onPress={() => {this.props.addItem(this.state.text)}} title='Добавить'></Button>
            </View>
        );
    }
}
