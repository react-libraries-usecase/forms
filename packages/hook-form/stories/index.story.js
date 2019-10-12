import React, { lazy, Suspense } from "react";
import { storiesOf } from "@storybook/react";

import HookForm from "./../src/HookForm";

storiesOf("React-Hook-Form", module).add("default", () => {
    const HookForm = lazy(() => import("./../src/HookForm"));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HookForm />
        </Suspense>
    );
});
