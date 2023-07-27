import React from 'react';
import { View, StyleSheet } from 'react-native';
import BackgroundImg from '../component/background';
import SliderShow from '../component/slidershow'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <BackgroundImg />
          <SliderShow />
          <BackgroundImg />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}