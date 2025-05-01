import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';



export default function App() {
  return (
    
    <View style={styles.container}>
    <View style={styles.container1}>
      <Text style={styles.text1}>navbar</Text>
      <StatusBar style="auto" />
    </View>

    <ScrollView>
      
    {/* <View style={styles.top}>
      <Text style={styles.text2}>Image/Video</Text>
      <StatusBar style="auto" />
    </View> */}

    <View style={styles.root2}>
          <ScrollView contentContainerStyle={{ height: 1500 }}>
          <View style={styles.section2}>
      <Text style={styles.text3}>Section 2</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.section3}>
      <Text style={styles.text3}>Section 3</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.section2}>
      <Text style={styles.text3}>Section 4</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.section3}>
      <Text style={styles.text3}>Section 5</Text>
      <StatusBar style="auto" />
    </View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
          </ScrollView>
        </View>

    <View style={styles.section2}>
      <Text style={styles.text3}>Section 2</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.section3}>
      <Text style={styles.text3}>Section 3</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.section2}>
      <Text style={styles.text3}>Section 4</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.section3}>
      <Text style={styles.text3}>Section 5</Text>
      <StatusBar style="auto" />
    </View>
    
    </ScrollView>

    <View style={styles.footer}>
      <Text style={styles.text4}>Footer</Text>
      <StatusBar style="auto" />
    </View>
    </View>


  );
  
  
  
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'left',
    justifyContent: 'center',
    width: 500
  },

  container1: {
    height: '10%',
    backgroundColor: 'red',
    alignItems: 'left',
    justifyContent: 'center',
    width: 500
  },

  top: {
    height: '250%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500
  },
  section2: {
    height: '50%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    
  },

  section3: {
    height: '50%',
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
   
    
  },

  footer: {
    height: '10%',
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

  root2: {
    height: '100%',
    width: '100%', 
  },
  box1: {
    height: 100,
    backgroundColor: 'blue',
  },
  box2: {
    height: 100,
    backgroundColor: 'purple',
  },
});