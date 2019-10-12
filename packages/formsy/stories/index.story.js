import React,{ lazy , Suspense } from 'react';
import {storiesOf} from '@storybook/react';

import MyForm from './../src/Formsy';
import Register from "../src/Register";

storiesOf('Formsy', module)
    .add(
        'Basic',
        () => {
            const MyForm = lazy(() => import('./../src/Formsy'));
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <MyForm />
                </Suspense>
            );
        }
    )
    .add(
        'Register',
        () => {
            const Register = lazy(() => import('./../src/Register'));
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <Register />
                </Suspense>
            );
        }
    );
