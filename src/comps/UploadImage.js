import React, { useState } from "react";

const UploadImage = ({ uploadFile }) => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            uploadFile(selected)
            setError(null);
        } else {
            setFile(null);
            setError('Please select correct file type (png or jpg)');
        }
    }

    return (
        <form>
            <label>+
                <input type="file" onChange={changeHandler} />
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div >Most recent uploaded : {file.name}</div>}
            </div>
        </form>
    )
}

export default UploadImage;
