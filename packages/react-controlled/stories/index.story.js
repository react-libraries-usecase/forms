import React from 'react';
import {storiesOf} from '@storybook/react';

import BasicForm from './../src/Basic';
import AdvancedForm from './../src/Advanced';
import LoginForm from './../src/Login';
import TabbedForms from './../src/Tabbed';
import UploadForm from './../src/Upload';
import WizardForm from './../src/Wizard';

storiesOf('React-Controlled', module)
    .add(
        'Basic',
        () => <BasicForm />
    )
    .add(
        'Advanced',
        () => <AdvancedForm />
    )
    .add(
        'Tabbed',
        () => <TabbedForms />
    )
    .add(
        'Upload',
        () => <UploadForm />
    )
    .add(
        'Wizard',
        () => <WizardForm />
    )

    .add(
        's-Login',
        () => <LoginForm />
    )
    .add(
        's-Register',
        () => <LoginForm />
    )
    .add(
        's-Post',
        () => <LoginForm />
    )
    .add(
        's-Contact',
        () => <LoginForm />
    );
