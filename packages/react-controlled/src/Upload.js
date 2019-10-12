import React, { useState } from "react";

const AdvancedForm = () => {
    const [data, setData] = useState({});
    const [filesArray, setFilesArray] = useState([]);
    const [isUploading, setUploadingFlag] = useState(false);

    const handleSubmit = event => {
        alert("A name was submitted: " + JSON.stringify(data));
        event.preventDefault();
    };

    const removeFile = address => {
        setFilesArray(filesArray.filter(file => file.address !== address));
    };

    const displayFilesPreview = () => {
        return filesArray.map((image, i) => (
            <div key={i} className="fadein">
                <div
                    onClick={() => removeFile(image.address)}
                    className="delete"
                >
                    x
                </div>
                <img src={image.address} alt="" />
            </div>
        ));
    };

    const onChangeUpload = e => {
        const files = Array.from(e.target.files);
        const formData = new FormData();

        setUploadingFlag(true);

        files.forEach((file, i) => {
            const reader = new FileReader();
            const type = file.type;
            const name = file.name;
            const extension = file.name.split(".").pop();

            reader.onload = function(e) {
                const img = new Image();
                img.src = reader.result;
                img.onload = function() {
                    setFilesArray([
                        ...filesArray,
                        {
                            address: reader.result,
                            type,
                            name,
                            extension
                        }
                    ]);
                };
            };
            reader.readAsDataURL(file);

            // we use this to upload file
            formData.append(i, file);
        });

        // // send files data to server
        // fetch(`${API_URL}/image-upload`, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(images => {
        //         this.setState({
        //             uploading: false,
        //             images
        //         })
        //     })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload file/s:
                {displayFilesPreview()}
                <input
                    onChange={onChangeUpload}
                    type="file"
                    multiple="multiple"
                />
            </label>
            <div className="formRow">
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default AdvancedForm;
