import React from 'react';
import {storiesOf} from '@storybook/react';

import HookForm from './../src';

storiesOf('React-Controlled', module)
    .add(
        'default',
        () => <HookForm />
    );
