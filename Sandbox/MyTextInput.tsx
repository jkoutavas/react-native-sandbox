import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Input, InputProps} from '@rneui/themed';

export const MyTextInput = React.forwardRef<typeof Input, InputProps>(
  (inputProps, ref) => {
    return (
      <View style={styles.inputWrapper}>
        <Input ref={ref} {...inputProps} />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
  } as ViewStyle,
});
