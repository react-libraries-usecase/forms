import React from 'react';
import {storiesOf} from '@storybook/react';

import Formsy from './../src';

storiesOf('React-Hook-Form', module)
    .add(
        'default',
        () => <Formsy />
    );
