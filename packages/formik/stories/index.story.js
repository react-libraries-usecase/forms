import React from 'react';
import {storiesOf} from '@storybook/react';

import Formik from './../src';

storiesOf('React-Hook-Form', module)
    .add(
        'default',
        () => <Formik />
    );
