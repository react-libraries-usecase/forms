import React from 'react';
import {storiesOf} from '@storybook/react';

import Basic from './../src/Basic';
import ReducedOne from './../src/ReducedOne';
import WithYup from './../src/WithYup';
import Wizard from './../src/Wizard/Wizard';

storiesOf('Formik', module)
    .add('basic',
        () => <Basic />
    )
    .add('ReducedOne',
        () => <ReducedOne />
    )
    .add('WithYup',
        () => <WithYup />
    )
    .add('Wizard',
        () => <Wizard />
    );
