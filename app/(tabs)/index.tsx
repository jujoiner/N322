import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#eaab81ff', dark: '#995947ff' }}
      headerImage={
        <Image
          source={require('@/assets/images/MinMaxBanner.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">MinMax</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Focus Your Build</ThemedText>
        <ThemedText>
          Identify a core role 
          <ThemedText style={{ fontStyle: 'italic' }}>
            (e.g., a tank, a damage dealer)
            </ThemedText> and 
          <ThemedText type="defaultSemiBold"> maximize </ThemedText> 
          the abilities that support it, while 
          <ThemedText type="defaultSemiBold"> minimize </ThemedText> 
          weaker, less relevant stats or skills.
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Strategic Race & Class Choices</ThemedText>
          <ThemedText>
          Select races and classes{' '}
          <ThemedText style={{ fontStyle: 'italic' }}>
             (e.g., the High Elf's cantrip, a fighter's Action Surge){' '}  
            </ThemedText>
            that offer 
          <ThemedText type="defaultSemiBold"> synergistic abilities </ThemedText> 
          for your chosen role.
          
        </ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Feats and Spells</ThemedText>
        <ThemedText>
          {`Pick `}
          <ThemedText type="defaultSemiBold">feats</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">advantages</ThemedText> or{' '}
          <ThemedText type="defaultSemiBold">exploit weaknesses</ThemedText> in enemies,
          {' such as feats that grant advantage or spells that control the battlefield.'}
        </ThemedText>
      </ThemedView>

        <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Equipment Selection</ThemedText>
        <ThemedText>
          Choose equipment that directly enhances your primary abilities or addresses a critical need for your build. 
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 395,
    bottom: 0,
    left: 0,
    right:0,
    position: 'absolute',
  },
});
