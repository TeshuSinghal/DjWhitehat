import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class BlueButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3' },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.playSound}>
        <Text style={styles.buttonText}> 
          SOUND 2 
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
   backgroundColor:'blue', 
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
})
export default BlueButton;