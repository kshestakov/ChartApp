import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Dimensions,
} from 'react-native';

export default class Item extends Component {
    render() {

        let value = this.props.value === 0 ? 0 : (this.props.value / this.props.counter * 100).toFixed(1);
        let maxWidth = Dimensions.get('window').width - 10; 
        let width = maxWidth * value / 100;

        return (
            <View>
                <View style={ {flexDirection: 'row', marginTop: 20, alignItems: 'flex-end'} }>
                    <Button color='#455a64' onPress={() => {this.props.vote(this.props.index)}} title='Голосовать'/>
                    <Text style={ {fontSize: 17, marginLeft: 5} } numberOfLines={1} >
                        {this.props.title}
                        {' '}
                        {value}
                        %
                    </Text>
                </View>
                <View style={ {height: 20, backgroundColor: '#26a69a', marginTop: 5, borderRadius: 10, width} }/>
            </View>
        );
    }
}
