import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  headerTextTime: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default class Timer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      gameTime: 0,
      beginTime: new Date(),
      intervalId: null
    }
  }

  componentDidMount(){
    let timer = setInterval(() => {
      let distance = Date.now() - this.state.beginTime;
      let time = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        gameTime: time
      })
    }, 1000)

    this.setState({
      intervalId : timer
    });
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId);
    this.props.callbackFromParent(this.state.gameTime);
  }

  render(){
    return (
      <View>
        <Text style={styles.headerTextTime}>Czas: {this.state.gameTime}</Text>
      </View>
    )
  }


}
