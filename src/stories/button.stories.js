import React from 'react';
import { storiesOf } from '@storybook/react';
import {Button} from '../components/button';
 
storiesOf('Button', module)
  .add('基本用法',() => (
    <Button>按钮</Button>
  ))
