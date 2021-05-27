import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button';
import {BufferView} from './decorator'

storiesOf("Button", module)
.addDecorator(BufferView)
  .add("default", () => (
    <Button onPress={action("click no botão defaul")}>
      Press me
    </Button>
  ))
  .add("outline", () => (
    <Button onPress={action("click no botão outline")} outline>
      Press me
    </Button>
  ))

