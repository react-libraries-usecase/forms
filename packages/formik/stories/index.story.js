import React from 'react';
import {storiesOf} from '@storybook/react';

import Basic from './../src/Basic';
import ReducedOne from './../src/ReducedOne';
import WithYup from './../src/WithYup';

storiesOf('Formik', module)
    .add(
        'basic',
        () => <Basic />
    )
    .add('ReducedOne',
        () => <ReducedOne />
    )
    .add('WithYup',
        () => <WithYup />
    );
