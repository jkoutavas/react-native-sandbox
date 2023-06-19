import React, {useCallback} from 'react';
import {NativeSyntheticEvent, StyleSheet, TextInput, TextInputSubmitEditingEventData, View, ViewStyle} from 'react-native';
import {Input, InputProps} from '@rneui/themed';

export type FocusRef = React.MutableRefObject<TextInput>;

export type MyTextInputProps = InputProps & {
  nextRef?: FocusRef; // reference to where the "next" key will change focus to
};

export const MyTextInput = React.forwardRef<TextInput, MyTextInputProps>(
  (props, ref) => {
    const focusNextRef = useCallback(
      () => props.nextRef?.current && props.nextRef.current.focus(),
      [props.nextRef],
    );
    const submitEditing = useCallback((
      e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        if (props.onSubmitEditing !== undefined) {
          props.onSubmitEditing(e);
        }
        focusNextRef();
      },
      [props, focusNextRef],
    );

    const baseInputProps = useCallback(() => {
      const baseProps = {...props};

      if (baseProps.returnKeyType === undefined) {
        if (baseProps.nextRef !== undefined) {
          baseProps.returnKeyType = 'next';
        } else if (props.onSubmitEditing !== undefined) {
          baseProps.returnKeyType = 'done';
        }
      }

      return baseProps;
    }, [props]);

    return (
      <View style={styles.inputWrapper}>
        <Input
          ref={ref}
          onSubmitEditing={submitEditing}
          {...baseInputProps()}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
  } as ViewStyle,
});
