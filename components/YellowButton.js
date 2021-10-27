import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class YellowButton extends React.Component {

  render() {
    return (
      <TouchableOpacity
        style= {styles.button}
        onPress={()=> {
        Audio.setIsEnabledAsync(false);
      }}>
        <Text style= {styles.buttonText}> 
          STOP SOUND 
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor:'yellow',
    marginTop: 30,
    marginLeft:50, 
    width:200, 
    height:40, 
    borderRadius:50,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold', 
    fontSize: 20
  }
});
export default YellowButton;
