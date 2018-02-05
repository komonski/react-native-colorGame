import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import ColorItem from './ColorItem';
import Timer from './Timer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginBottom: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 8,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    padding: 15
  },
  headerTextTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  game: {
    alignSelf: 'stretch'
  },
  containerImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  }
});

export default class Game extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: [
        'czerwony', '#F44336',
        'różowy', '#E91E63',
        'fioletowy', '#9C27B0',
        'indygo', '#3F51B5',
        'niebieski', '#2196F3',
        'niebieskozielony', '#00BCD4',
        'limonka', '#CDDC39',
        'zielony', '#4CAF50',
        'jasno zielony', '#8BC34A',
        'zolty', '#FFEB3B',
        'bursztynowy', '#FFC107',
        'pomaranczowy', '#FF9800',
        'szary', '#9E9E9E',
        'brazowy', '#795548',
        'czarny', '#000000'
      ],

      gameState: 1,
      round: 1,
      maxRound: 5,
      correctAnswers: 0,
      listDataFromChild: null,
      correctAnswer: null,
      timer: true,
      finalTime: 0,
      colorItems: []
    }

    this.myCallback = this.myCallback.bind(this);
    this.myTimerCallback = this.myTimerCallback.bind(this);
  }

  myCallback(dataFromChild){
    if(dataFromChild.round > this.state.maxRound){
      this.setState({
        gameState: 2,
        correctAnswers: dataFromChild.correctAnswers
      })
    } else {
      this.setState({
        gameState: dataFromChild.gameState,
        correctAnswers: dataFromChild.correctAnswers,
        round: dataFromChild.round
      }, () => {
        console.log('Twoj wynik to: ' + this.state.correctAnswers);
        this.setState({
          gameState: 1
        })
      });
    }
   }

   myTimerCallback(dataFromChild){
     this.setState({
       finalTime: dataFromChild
     })
   }

  render() {
    if(this.state.gameState === 0){
      this.state.colorItems = [];
    }

    if(this.state.gameState === 1){
      this.state.colorItems = [];
      this.state.correctAnswer = this._randomCorrectAnswer();

      for(let i = 1 ; i <= 3 ; i++){
        let randomEvenNumber = this._randomEvenNumberFromDataAmount(),
            randomOddNumber = null;

        //loop to avoid situation with two correct answers
        do{
          randomOddNumber = this._randomOddNumberFromDataAmount();
        } while(randomOddNumber === randomEvenNumber+1)

        if(i === this.state.correctAnswer){
            this.state.colorItems.push(
              <ColorItem
              key={i}
              correctAnswers={this.state.correctAnswers}
              round={this.state.round}
              callbackFromParent={this.myCallback}
              correction={true}
              bgColor={this.state.data[randomEvenNumber+1]}
              text={this.state.data[randomEvenNumber]}/>);
        } else{
            this.state.colorItems.push(
              <ColorItem key={i}
              correctAnswers={this.state.correctAnswers}
              round={this.state.round}
              callbackFromParent={this.myCallback}
              correction={false}
              bgColor={this.state.data[randomOddNumber]}
              text={this.state.data[randomEvenNumber]}/>);
        }
      }
    }

    if(this.state.gameState === 2) {
      this.state.timer = false;
      this.state.colorItems = [];
    }

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.containerImage} source={require('./../Images/bg.png')} />
        <View style={styles.header}>
          <Text style={styles.headerTextTitle}>Runda {this.state.round} z {this.state.maxRound}</Text>
          <Text style={styles.headerTextTitle}>Punkty: {this.state.correctAnswers}</Text>
          {this.state.timer && <Timer callbackFromParent={this.myTimerCallback} />}
          <Text style={styles.headerTextTitle}>Twoj czas to {this.state.finalTime} sekundy</Text>
        </View>
        <View style={styles.game}>
          {this.state.colorItems}
        </View>
      </View>
    )
  }

  _randomCorrectAnswer(){
    return Math.floor(Math.random() * 3) + 1;
  }

  _randomEvenNumberFromDataAmount(){
    let number;

    do {
         number = Math.floor(Math.random() * (this.state.data.length - 1)) + 0;
    } while( number % 2 == 1 );

    return number;
  }

  _randomOddNumberFromDataAmount(){
    let number;

    do {
         number = Math.floor(Math.random() * (this.state.data.length - 1)) + 0;
    } while( number % 2 == 0 );

    return number;
  }
};
