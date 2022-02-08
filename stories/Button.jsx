import React from 'react';
// import {StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Button, Text, NativeBaseProvider} from 'native-base';

// const styles = StyleSheet.create({
//   button: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 4,
//     alignSelf: 'flex-start',
//     flexGrow: 0,
//     backgroundColor: 'purple',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     alignItems: 'flex-start',
//     flex: 1,
//   },
// });

export const MyButton = ({text, onPress, colorScheme, textColor, size}) => (
  <Button
    alignSelf="flex-start"
    colorScheme={colorScheme}
    size={size}
    variant="solid"
    onPress={onPress}>
    <Text color={!!textColor ? textColor : 'white'} bold>
      {text}
    </Text>
  </Button>
);
