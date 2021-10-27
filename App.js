import * as React from 'react';
import { View } from 'react-native';
import PurpleButton from './components/PurpleButton';
import BlueButton from './components/BlueButton';
import GreenButton from './components/GreenButton';
import RedButton from './components/RedButton';
import YellowButton from './components/YellowButton';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'#bdfcf6'}}>
       <AppHeader />
        <PurpleButton />
        <BlueButton />
        <GreenButton />
        <RedButton />
        <YellowButton />
        
      </View>
    );
  }
}
