import React from 'react';
import {storiesOf} from '@storybook/react';

import MyForm from './../src/Formsy';

storiesOf('Formsy', module)
    .add(
        'default',
        () => <MyForm />
    );
