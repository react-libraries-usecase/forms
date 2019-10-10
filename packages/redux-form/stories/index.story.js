import React from 'react';
import {storiesOf} from '@storybook/react';

import HookForm from './../src';

storiesOf('Redux-Form', module)
    .add(
        'default',
        () => <HookForm />
    );
