import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  NavigatorIOS,
  Image,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import Game from './Game';
import Tutorial from './Tutorial';
import Author from './Author';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative'
  },
  containerImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },
  logo: {
    resizeMode: 'center',
    marginTop: '15%'
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: 0,
    marginBottom: '-18%'
  },
  buttonImg: {
    resizeMode: 'center'
  }
});

export default class Main extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.containerImage} source={require('./../Images/bg.png')} />
        <Image style={styles.logo} source={require('./../Images/logo.png')} />

        <View style={styles.menu}>
            <TouchableHighlight
              onPress={() => this.props.navigator.push({component: Game, title: 'Nowa gra'})}
              style={styles.button}>
              <Image
                style={styles.buttonImg}
                source={require('./../Images/zagraj.png')}
              />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.props.navigator.push({component: Tutorial, title: 'Instrukcja'})}
              style={styles.button}>
              <Image
                style={styles.buttonImg}
                source={require('./../Images/instrukcja.png')}
              />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.props.navigator.push({component: Author, title: 'O Autorze'})}
              style={styles.button}>
              <Image
                style={styles.buttonImg}
                source={require('./../Images/autor.png')}
              />
            </TouchableHighlight>
        </View>

      </View>
    )
  }

  onPressRanking(){
    console.log('test2');
  }
}
