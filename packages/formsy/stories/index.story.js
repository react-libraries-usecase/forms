import React from 'react';
import {storiesOf} from '@storybook/react';

import Formsy from './../src';

storiesOf('Formsy', module)
    .add(
        'default',
        () => <Formsy />
    );
