import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  box: {
    padding: 20,
    paddingTop: 30,
    marginTop: 8,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    borderWidth: 8,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class ColorItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      bgColor: this.props.bgColor,
      text: this.props.text,
      correction: this.props.correction,
      userAnswer: null
    }
  }

  render(){
    return (
      <View>
      <Text
        style={[{backgroundColor: this.state.bgColor}, styles.box]}
        onPress={this._userChoose.bind(this)}
        >{this.state.text}</Text>
      </View>
    )
  }

  _userChoose(){
    let correctAnswers = this.props.correctAnswers,
        round = this.props.round;

    if(this.props.correction){
      correctAnswers++;
    }

    round++;

    this.props.callbackFromParent({
      gameState: 0,
      correctAnswers: correctAnswers,
      round: round
    });
  }
}
