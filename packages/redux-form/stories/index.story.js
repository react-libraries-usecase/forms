import React,{ lazy , Suspense } from 'react';
import {storiesOf} from '@storybook/react';


storiesOf('Redux-Form', module)
    .add(
        'ContactForm',
        () => {
        	const ContactForm = lazy(() => import('./../src/ContactForm'));
			return(
				<Suspense fallback={<div>Loading...</div>}>
					<ContactForm />
				</Suspense>
			);
        }
    )
    .add(
        'Advanced',
        () => {
        	const Advanced = lazy(() => import('./../src/Advanced'));
			return(
				<Suspense fallback={<div>Loading...</div>}>
					<Advanced />
				</Suspense>
			);
        }
    )
    .add(
        'UploadForm',
        'Advanced',
        () => {
        	const UploadForm = lazy(() => import('./../src/Upload'));
			return(
				<Suspense fallback={<div>Loading...</div>}>
					<UploadForm />
				</Suspense>
			);
        }
    );
