import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
} from 'react-native';
import Item from '../Item/Item';

export default class BarChart extends Component {
    render() {

        return (
            <View>
                <Text style={{fontSize: 17, textAlign: 'center', marginTop: 5}}>
                    Всего проголосовало: {this.props.counter}
                </Text>
                <ScrollView>
                    {this.props.itemArray.map((item, index) => 
                        <Item 
                            key={item.title}
                            index={index} 
                            title={item.title}
                            value={item.value}
                            vote={this.props.vote} 
                            counter={this.props.counter}
                        />
                    )}

                </ScrollView>
            </View>
        );
    }
}