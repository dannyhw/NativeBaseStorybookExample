import {MyButton} from './Button';

export default {
  title: 'components/Button',
  component: MyButton,
  argTypes: {
    onPress: {
      action: 'clicked',
      description: 'The function to call when the button is pressed',
    },
    colorScheme: {
      control: {
        type: 'inline-radio',
        options: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
};

export const Basic = {
  args: {
    text: 'Hello World',
    colorScheme: 'primary',
    size: 'md',
  },
};
