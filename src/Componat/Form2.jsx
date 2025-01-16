import React, { useState } from 'react'

export default function Form2() {

    const [input, setInput] = useState({ name: "" })
    const [file, setFile] = useState(null)
    const [arr, setArr] = useState([])

    const saveImage = (e) => {
        const imageFile = Array.from(e.target.files)
        if (imageFile.length > 0) {
            setFile(imageFile);
        }
    }

    const handelform = (e) => {
        e.preventDefault();
        if (file) {
            const fileURL = file.map((files) => URL.createObjectURL(files));
            setArr([...arr, { name: input.name, file: fileURL }])

        }
        setInput({ name: "" });
        setFile(null);



    }


    return (
        <div>
            <form onSubmit={handelform}>
                <input type="text" placeholder='enter name' value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
                <input type="file" onChange={saveImage} multiple />
                <button type='submit'>submit

                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th>name</th>
                        <th>img</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        arr.map((ele, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.file.map((files) => (
                                    <img src={files} alt="" width="20%  " />
                                ))}</td>
                            </tr>
                        ))}
                </tbody>
            </table>

        </div>
    )
}