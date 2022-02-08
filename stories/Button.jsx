import {Button} from 'native-base';
import React from 'react';

export const MyButton = ({text, onPress, colorScheme, size}) => (
  <Button
    alignSelf="flex-start"
    colorScheme={colorScheme}
    size={size}
    variant="solid"
    onPress={onPress}>
    {text}
  </Button>
);
