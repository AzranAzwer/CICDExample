import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

export const InputCompoent = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView>
      <View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>CI/CD Example App</Text>
          <TextInput
            style={{
              height: 30,
              borderColor: 'grey',
              borderWidth: 2,
              marginTop: 10,
            }}
            placeholder="write anything"
            onChangeText={value => setText(value)}
          />
          <Text style={{marginTop: 20}}>{text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
