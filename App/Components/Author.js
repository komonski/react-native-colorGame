import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image
} from "react-native";

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
  text: {
    marginBottom: 45,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 8,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    padding: 15
  },
  heading: {
    fontSize: 30,
    paddingBottom: 15,
    fontWeight: "bold"
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 7
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    lineHeight: 24
  }
});

export default class Author extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground style={styles.containerImage} source={require('./../Images/bg.png')} />
        <Image style={styles.logo} source={require('./../Images/logo.png')} />

        <View style={styles.text}>
          <Text style={styles.heading}>O autorze</Text>
          <Text style={styles.name}>Damian Komoński</Text>
          <Text style={styles.paragraph}>www.github.com/komonski</Text>
          <Text style={styles.paragraph}>Projekt na zaliczenie przedmiotu "Systemy mobilne i satelitarne", Politechnika Rzeszowska, 2017/18</Text>
          <Text style={styles.paragraph}>Technologie: React Native</Text>
        </View>

      </View>
    )
  }
}
