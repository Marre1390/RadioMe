import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Text>Hola</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
