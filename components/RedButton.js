import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class RedButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg' },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.playSound}>
        <Text style={styles.buttonText}> 
          SOUND 4 
          </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor:'red',
    marginTop: 30,
    marginLeft:50, 
    width:200, 
    height:70, 
    borderRadius:50,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold', 
    fontSize: 20
  }
});
export default RedButton;
