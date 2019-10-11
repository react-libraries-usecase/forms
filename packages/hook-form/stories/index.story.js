import React from 'react';
import {storiesOf} from '@storybook/react';

import HookForm from './../src/HookForm';

storiesOf('React-Hook-Form', module)
    .add(
        'default',
        () => <HookForm />
    );
