import React , {useState} from 'react';
import { StyleSheet, Text, View, Picker , Button } from 'react-native';
import Main from './src/Components/main/main';
import Date from './src/Components/date'


export default function App() {
  const [dados, setDados] = useState({
    weather:[{description:'nada'}],
    main:{
      temp:0,
      temp_max:0,
      temp_min:0,
    }
  });

  return (
    <View style={styles.container}>
      <Main
        pickData={setDados}
      />
      <Date
        data={dados}
      />
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
