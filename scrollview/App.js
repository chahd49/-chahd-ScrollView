import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.text1}>navbar</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.top}>
      <Text style={styles.text2}>Image/Video</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.section2}>
      <Text style={styles.text3}>Section 2</Text>
      <StatusBar style="auto" />
    </View>
    
    <View style={styles.footer}>
      <Text style={styles.text4}>Footer</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
  
  
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'left',
    justifyContent: 'center',
    width: 500
  },
  top: {
    flex: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500
  },
  section2: {
    flex: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500
    
  },
  footer: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500
  },

  text1: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Arial'

  },

  text2: {
    color: 'orange',
    fontSize: 30
  },

  text3: {
    color: 'white',
    fontSize: 20
  },

  text4: {
    color: 'black'
  },
});