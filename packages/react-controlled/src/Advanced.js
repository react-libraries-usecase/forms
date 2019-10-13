import React, { useState } from 'react';

const AdvancedForm = () => {
  const [data, setData] = useState({});
  const [filesArray, setFilesArray] = useState([]);
  const [isUploading, setUploadingFlag] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    console.log({ name, value });
    data[name] = value;
    setData(data);
  };

  const handleSubmit = event => {
    alert('A name was submitted: ' + JSON.stringify(data));
    event.preventDefault();
  };

  const removeFile = address => {
    setFilesArray(filesArray.filter(file => file.address !== address));
  };

  const displayFilesPreview = () =>
    filesArray.map((image, i) => (
      <div key={i} className='fadein'>
        <div onClick={() => removeFile(image.address)} className='delete'>
          x
        </div>
        <img src={image.address} alt='' />
      </div>
    ));

  const onChangeUpload = e => {
    const files = Array.from(e.target.files);
    const formData = new FormData();

    setUploadingFlag(true);

    files.forEach((file, i) => {
      const reader = new FileReader();
      const type = file.type;
      const name = file.name;
      const extension = file.name.split('.').pop();

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
      <div className={'formRow'}>
        <label>
          Name:
          <input
            defaultValue='Bob'
            type='text'
            name={'name'}
            value={data.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={'formRow'}>
        Are you here :
        <label>
          Yeah
          <input
            defaultChecked='true'
            name={'hereStatus'}
            type='radio'
            value={0}
            onChange={handleChange}
          />
        </label>
        <label>
          No
          <input
            defaultChecked='false'
            type='radio'
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
            defaultChecked='true'
            type='checkbox'
            name={'activeStatus'}
            value={1}
            onChange={handleChange}
          />
        </label>
      </div>
      <label>
        Upload file/s:
        {displayFilesPreview()}
        <input onChange={onChangeUpload} type='file' multiple='multiple' />
      </label>
      <div className='formRow'>
        <input type='submit' value='Submit' />
      </div>
    </form>
  );
};

export default AdvancedForm;
