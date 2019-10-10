import React from 'react';
import {storiesOf} from '@storybook/react';

import Usage from './../src';

storiesOf('Redux-Form', module)
    .add(
        'default',
        () => <Usage />
    );
