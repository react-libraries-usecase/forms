import React from 'react';
import {storiesOf} from '@storybook/react';

import MyForm from './../src/Formsy';
import Register from "../src/Register";

storiesOf('Formsy', module)
    .add(
        'Basic',
        () => <MyForm />
    )
    .add(
        'Register',
        () => <Register />
    );
