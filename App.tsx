import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Picker , Button } from 'react-native';
import Main from './src/Components/main/main';
//import Parent from './src/Components/TestingComp';


export default function App() {
  
  const [veloVento,setVeloVento] = useState();

  

  return (
    <View style={styles.container}>
      <Main/>
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
