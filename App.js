import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.homeContainer}>
        <LinearGradient
      colors={['#8FBC8F','#DCDCDC','#90EE90']}
      style={styles.homeContainer}>
      
        <View style={styles.title}>
          
          <Text style={styles.mainTitle}>Food App</Text>
          <Text style={styles.subTitle}>Find food</Text>
          
        </View> 


      </LinearGradient>
      </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    width: "100%",
    height: "100%"
  },
  title: {
    marginTop: "30%",
    alignItems: "center",
    width: '100%',
    

  },
  mainTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    fontStyle: 'italic'
  }
});
