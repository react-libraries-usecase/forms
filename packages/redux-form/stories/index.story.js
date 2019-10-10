import React from 'react';
import {storiesOf} from '@storybook/react';

import HookForm from './../src';

storiesOf('React-Hook-Form', module)
    .add(
        'default',
        () => <HookForm />
    );