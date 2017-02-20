import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    Alert,
} from 'react-native';

import BarChartContainer from '../../containers/BarChartContainer';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    addItem = () => {
        this.state.text.trim()
            ? this.props.addItem(this.state.text)
            : Alert.alert('Ошибка', 'Введите значение');
    }

    render() {
        return (
            <View style={{paddingHorizontal: 5}}>
                <TextInput 
                    placeholder='Введите текст'
                    onChangeText={text => this.setState({text})}
                />
                <Button onPress={this.addItem} title='Добавить'></Button>
                <BarChartContainer/>
            </View>
        );
    }
}
