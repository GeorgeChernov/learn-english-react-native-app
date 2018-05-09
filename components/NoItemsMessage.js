import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NoItemsMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>No Items</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({});