import React from 'react';
import {storiesOf} from '@storybook/react';

import MyForm from './../src/ControlledForm';

storiesOf('React-Controlled', module)
    .add(
        'default',
        () => <MyForm />
    );
