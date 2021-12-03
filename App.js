// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import RampSdk from '@ramp-network/react-native-sdk';

export default function App() {

  const ramp = new RampSdk({
    url: 'https://ri-widget-staging.firebaseapp.com',
    hostAppName: 'React Native Example',
    hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
  }).on('*', (event) => {
    console.log(`RampSdk.on('*')`, event);
  });

  return (
    <View style={styles.container}>
      <Button title={`Run Ramp Widget`} onPress={() => ramp?.show()} />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
