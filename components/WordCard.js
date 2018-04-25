import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Divider } from 'react-native-elements'

export default class WordCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card containerStyle={styles.wordCard_card}>
        <View>
          <Text style={styles.wordCard_main_text}>{this.props.eng}</Text>
          <Divider style={styles.wordCard_divider} />
          <Text style={styles.wordCard_translation_text}>{this.props.rus}</Text>
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  wordCard_card: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: '#F8F9FB',
    borderRadius: 0,
    borderColor: '#F8F9FB',
    borderWidth: 0,
    borderLeftColor: '#698FF0',
    borderLeftWidth: 6
  },
  wordCard_main_text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  wordCard_divider: {
    backgroundColor: '#698FF0',
    opacity: 0.2
  },
  wordCard_translation_text: {
    fontSize: 16,
    marginTop: 10
  }
});