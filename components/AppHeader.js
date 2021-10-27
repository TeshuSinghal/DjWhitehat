import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

 class AppHeader extends React.Component{
   render(){
    return(
      <View style={styles.textContainer}>
     <Text style = {styles.text}> DJ WhiteHat </Text>
     
     </View>
    )  
  }
 }
  const styles = StyleSheet.create({
      textContainer:{
        backgroundColor:'black',
        marginBottom:50
        
      },
      text:{
        color:'white',
        fontSize:30,
        fontStyle:'bold',
        textAlign:'center'
        
      }
  });
     
export default AppHeader;