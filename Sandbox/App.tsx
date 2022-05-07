/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text1, onChangeText1] = React.useState('Text Field 1');
  const [text2, onChangeText2] = React.useState('Text Field 2');
  const [text3, onChangeText3] = React.useState('Text Field 3');

  // To resolve 'Object is possibly 'undefined'.ts(2532)', I applied this (null!) solution
  // from https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#useref
  const refInput1 = React.useRef<TextInput>(null!);
  const refInput2 = React.useRef<TextInput>(null!);
  const refInput3 = React.useRef<TextInput>(null!);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <KeyboardAwareScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Next key test">
            Use the Next key to move thru these three fields
          </Section>
          <TextInput
            style={styles.input}
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => refInput2.current.focus()}
            ref={refInput1}
            onChangeText={onChangeText1}
            value={text1}
          />
          <TextInput
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => refInput3.current.focus()}
            ref={refInput2}
            onChangeText={onChangeText2}
            value={text2}
          />
          <TextInput
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => refInput1.current.focus()}
            ref={refInput3}
            onChangeText={onChangeText3}
            value={text3}
          />
        </View>
      </KeyboardAwareScrollView>
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
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
