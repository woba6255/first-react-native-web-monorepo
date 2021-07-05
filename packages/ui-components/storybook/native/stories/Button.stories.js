import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from "../../../lib";

storiesOf('Button', module)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}/>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
     😀 😎 👍 💯
    </Button>
  ));
