import React from "react";

const UnControlledForm = () => {
    const inputRef = React.createRef();

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={inputRef} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default UnControlledForm;
