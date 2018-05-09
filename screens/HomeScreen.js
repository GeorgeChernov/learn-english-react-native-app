import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListItem, Button, Overlay, Icon, Input, Divider, Header } from 'react-native-elements'

import WordCard from '../components/WordCard';
import NoItemsMessage from '../components/NoItemsMessage';
import WordStorage from '../services/WordStorage.js';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      wordInEnglish: "",
      wordInNative: "",
      items: new WordStorage().get()
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Header
          innerContainerStyles={{ backgroundColor: "#698FF0" }}
          outerContainerStyles={{ backgroundColor: "#698FF0" }}
          centerComponent={{ text: 'DICTIONARY', style: { color: '#fff', fontSize: 18 } }}
          rightComponent={{ onPress: this._handlePressOnAdd, icon: 'add', color: '#fff' }}
        />

        <View style={{ height: 180, paddingLeft: 10, backgroundColor: "#698FF0" }}>
          <View style={{ alignItems: 'center' }}>
            <Text h2 style={{ fontSize: 18, marginTop: 20, color: '#fff' }}>ADD NEW WORD</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingRight: 70 }}>
            <Text style={{ fontSize: 16, marginTop: 20, marginRight: 10, color: '#fff' }}>In English:</Text>
            <Input onChangeText={this._handleTypingWordInEnglish} style={{ color: '#fff' }} />
          </View>
          <View style={{ flexDirection: 'row', paddingRight: 80, marginTop: 10 }}>
            <Text style={{ fontSize: 16, marginTop: 20, marginRight: 10, color: '#fff' }}>Translation:</Text>
            <Input onChangeText={this._handleTypingWordInNative} style={{ color: '#fff' }} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Button
              icon={
                <Icon
                  name='check'
                  size={15}
                  color='white'
                />
              }
              title='ADD'
              buttonStyle={styles.addButton}
              onPress={this._handlePressOnAddOnOverlay}
            />
            <Button
              icon={
                <Icon
                  name='cancel'
                  size={15}
                  color='white'
                />
              }
              title='CANCEL'
              buttonStyle={styles.addButton}
              onPress={this._handlePressOnCancel}
            />
          </View>
        </View>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {
            this._getWordCards()
          }
        </ScrollView>
        <Overlay isVisible={this.state.isVisible} overlayStyle={{ height: 340 }}>
          <View style={{ alignItems: 'center', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <Text h2 style={{ fontSize: 22, marginTop: 10 }}>ADD NEW WORD</Text>
            <Text style={{ fontSize: 18, marginTop: 30 }}>Add a word or a phrase in English</Text>
            <Input onChangeText={this._handleTypingWordInEnglish} />
            <Text style={{ fontSize: 18, marginTop: 30 }}>translate to your language</Text>
            <Input onChangeText={this._handleTypingWordInNative} />
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
              <Button
                icon={
                  <Icon
                    name='check'
                    size={15}
                    color='white'
                  />
                }
                title='ADD'
                buttonStyle={styles.addButton}
                onPress={this._handlePressOnAddOnOverlay}
              />
              <Button
                icon={
                  <Icon
                    name='cancel'
                    size={15}
                    color='white'
                  />
                }
                title='CANCEL'
                buttonStyle={styles.addButton}
                onPress={this._handlePressOnCancel}
              />
            </View>
          </View>
        </Overlay>
      </View>
    );
  }

  _getWordCards() {
    if (this.state.items.length) {
      return this.state.items.map((word, i) => {
        return <WordCard key={i} eng={word.eng} rus={word.rus}></WordCard>
      });
    } else {
      return <NoItemsMessage />;
    }
  };

  _handlePressOnAdd = () => {
    this.setState(() => {
      return { isVisible: true };
    });
  };

  _handlePressOnCancel = () => {
    this.setState(() => {
      return { isVisible: false };
    });
  };

  _handlePressOnAddOnOverlay = () => {
    var eng = this.state.wordInEnglish;
    var native = this.state.wordInNative;

    if (eng && native) {
      this.setState((prevState) => {
        return {
          wordInEnglish: "",
          wordInNative: "",
          isVisible: false,
          items: [...prevState.items, { eng: eng, rus: native }]
        };
      });
    }
  };

  _handleTypingWordInEnglish = (text) => {
    this.setState(() => {
      return { wordInEnglish: text };
    });
  };

  _handleTypingWordInNative = (text) => {
    this.setState(() => {
      return { wordInNative: text };
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  contentContainer: {
    paddingTop: 0,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  addButton: {
    marginTop: 10,
    borderRadius: 0,
    backgroundColor: "#698FF0",
    marginLeft: 15,
    marginRight: 15,
  },
});
