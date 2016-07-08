'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Slider from '@ldn0x7dc/react-native-slider';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const tracks = [
      {
        key: '1',
        style: {backgroundColor: '#0000ff66'},
        startValue: 0.5,
        endValue: 0.9
      },
      {
        key: '2',
        style: {backgroundColor: '#00ff0066'},
        startValue: 0.2,
        endValue: 0.3
      },
      {
        key: '3',
        style: {backgroundColor: 'green'},
        startValue: 0.001,
        endValue: 0.25
      },
    ];

    const trackContainerStyle = {
      height: 10,
      shadowColor: 'black', shadowOffset: {width: 2, height: 2}, shadowOpacity: 0.5, shadowRadius: 2,
      borderRadius: 5,
      backgroundColor: '#00000066'
    }

    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>

        <Slider
          style={{height: 20, marginTop: 100, marginHorizontal: 10}}
          //tracks={tracks}
          value={0}
          onValueChange={(value) => {
            console.log('onValueChange...value=' + value);
          }}
          onSlidingStart={(value) => {
            console.log('onSlidingStart...value=' + value);
          }}
          onSlidingComplete={(value) => {
            console.log('onSlidingComplete...value=' + value);
          }}
        />
      </View>

    );
  }
}