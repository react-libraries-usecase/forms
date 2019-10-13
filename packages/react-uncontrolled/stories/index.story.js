import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('React-UnControlled', module)
  .add('Basic', () => {
    const BasicForm = lazy(() => import('./../src/Basic'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
  .add('Login', () => {
    const LoginForm = lazy(() => import('./../src/Login'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    );
  })
  .add('Advanced', () => {
    const AdvancedForm = lazy(() => import('./../src/Advanced'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <AdvancedForm />
      </Suspense>
    );
  })
  .add('Tabbed', () => {
    const TabbedForms = lazy(() => import('./../src/Tabbed'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <TabbedForms />
      </Suspense>
    );
  })
  .add('Upload', () => {
    const UploadForm = lazy(() => import('./../src/Upload'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <UploadForm />
      </Suspense>
    );
  })
  .add('Wizard', () => {
    const WizardForm = lazy(() => import('./../src/Wizard'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <WizardForm />
      </Suspense>
    );
  });
