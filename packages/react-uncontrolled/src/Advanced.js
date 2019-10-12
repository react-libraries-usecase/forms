import React, {useRef, useState} from "react";


const useForceUpdate = () => useState()[1];

const AdvancedForm = () => {
    const [data, setData] = useState({});
    const fileUploadRef = useRef(null);
    const forceUpdate = useForceUpdate();

    const handleChange = (event) => {
        const {name, value} =  event.target;
        console.log({name , value});
        data[name] = value;
        setData(data);
    };

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + JSON.stringify(data));
        event.preventDefault();
    };



    function fileNames() {
        const { current } = fileUploadRef;

        if (current && current.files.length > 0) {
            let messages = [];
            for (let file of current.files) {
                messages = messages.concat(<p key={file.name}>{file.name}</p>);
            }
            return messages;
        }
        return null;
    }


    // const UploadChanged = () => {
    //
    //     const files = fileUploadRef.current.files;
    //     alert(
    //         `Selected file - ${
    //             fileUploadRef.current.files[0].name
    //         }`
    //     );
    //
    //
    //     setUpload(files);
    //     const reader = new FileReader();
    //     reader.onload = function(e) {
    //         const img = new Image();
    //         img.src = reader.result;
    //         img.onload = function () {
    //             // e.target.result
    //         };
    //     };
    //     reader.readAsDataURL(.files[0]);
    //
    // };

    return (
        <form onSubmit={handleSubmit}>
            <div className={'formRow'}>
                <label>
                    Name:
                    <input
                        defaultValue="Bob"
                        type="text"
                        name={'name'}
                        value={data['name']}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className={'formRow'}>
                Are you here :
                <label>
                    Yeah
                    <input
                        defaultChecked="true"
                        name={'hereStatus'}
                        type="radio"
                        value={0}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    No
                    <input
                        defaultChecked="false"
                        type="radio"
                        name={'hereStatus'}
                        value={1}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className={'formRow'}>
                <label>
                    Active :
                    <input
                        defaultChecked="true"
                        type="checkbox"
                        name={'activeStatus'}
                        value={1}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <label>
                Upload file/s:
                { fileNames() }

                <input
                    onChange={forceUpdate}
                    type="file"
                    multiple="multiple"
                    ref={fileUploadRef} />
            </label>
            <div className="formRow">
                <input type="submit" value="Submit" />
            </div>

        </form>
    );
};


export default AdvancedForm;
