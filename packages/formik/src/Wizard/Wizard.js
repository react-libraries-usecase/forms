import React from "react";
import ReactDOM from "react-dom";
import { Field } from "formik";
import {
    FormikWizardProvider,
    Wizard,
    StepsList,
    Step,
    ButtonsList,
    PreviousButton,
    NextButton,
    SubmitButton
} from "./src";
import withFormik from "./withFormik";

import BasicDetails from "./BasicDetails";
import ContactDetails from "./ContactDetails";
import AddressDetails from "./AddressDetails";

function basicValidations({ errors }) {
    return !errors.firstName;
}

function contactValidations({ errors }) {
    return !errors.email;
}

function addressValidations({ errors }) {
    return !errors.addressLine1;
}

function App(props) {
    return (
        <div className="App">
            <FormikWizardProvider {...props}>
                {({ getValidators, ...otherProps }) => (
                    <Wizard {...otherProps}>
                        <StepsList
                            validators={getValidators([
                                basicValidations,
                                contactValidations,
                                addressValidations
                            ])}
                        >
                            <Step
                                component={BasicDetails}
                                title="Basic Details"
                            />
                            <Step
                                component={ContactDetails}
                                title="Contact Details"
                            />
                            <Step
                                component={AddressDetails}
                                title="Address Details"
                            />
                        </StepsList>
                        <ButtonsList>
                            <PreviousButton />
                            <NextButton />
                            <SubmitButton />
                        </ButtonsList>
                    </Wizard>
                )}
            </FormikWizardProvider>

            <div style={{ margin: "1rem 0" }}>
                <h3 style={{ fontFamily: "monospace" }} />
                <pre
                    style={{
                        background: "#f6f8fa",
                        fontSize: ".65rem",
                        padding: ".5rem"
                    }}
                >
                    <strong>props</strong> = {JSON.stringify(props, null, 2)}
                </pre>
            </div>
        </div>
    );
}

export default withFormik(App);
