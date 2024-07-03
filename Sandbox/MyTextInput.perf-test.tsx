import React from 'react';
import {StyleSheet} from 'react-native';

import {measureRenders} from 'reassure';
import {MyTextInput} from './MyTextInput';

test('MyTextInput', async () => {
  await measureRenders(
    <MyTextInput containerStyle={styles.input} value="test" />,
  );
}, 5000);

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    marginRight: 10,
  },
});
