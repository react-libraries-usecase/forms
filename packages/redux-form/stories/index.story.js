import React from 'react';
import {storiesOf} from '@storybook/react';

import ContactForm from './../src/ContactForm';
import Advanced from './../src/Advanced';

storiesOf('Redux-Form', module)
    .add(
        'ContactForm',
        () => <ContactForm />
    )
    .add(
        'Advanced',
        () => <Advanced />
    );
