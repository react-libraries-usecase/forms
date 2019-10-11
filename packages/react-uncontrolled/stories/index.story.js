import React from 'react';
import {storiesOf} from '@storybook/react';

import UnControlledForm from './../src/UnControlledForm';

storiesOf('React-UnControlled', module)
    .add(
        'default',
        () => <UnControlledForm />
    );
