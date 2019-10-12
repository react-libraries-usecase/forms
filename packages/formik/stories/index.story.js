import React,{ lazy , Suspense } from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('Formik', module)
    .add('basic',
        () => {
            const Basic = lazy(() => import('./../src/Basic'));
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <Basic />
                </Suspense>
            );
        }
    )
    .add('ReducedOne',
        () => {
            const ReducedOne = lazy(() => import('./../src/ReducedOne'));
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <ReducedOne />
                </Suspense>
            );
        }
    )
    .add('WithYup',
        () => {
            const WithYup = lazy(() => import('./../src/WithYup'));
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <WithYup />
                </Suspense>
            );
        }
    )
    .add('Wizard',
        () => {
            const Wizard = lazy(() => import('./../src/Wizard/Wizard'));
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <Wizard />
                </Suspense>
            );
        }
    );
