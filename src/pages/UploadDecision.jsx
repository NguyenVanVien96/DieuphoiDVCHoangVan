import { useState } from "react";

export default function UploadDecision() {

    const [file, setFile] = useState(null);

    async function handleUpload() {

        if (!file) {

            alert("Vui lòng chọn file PDF");

            return;

        }

        const formData = new FormData();

        formData.append("pdf", file);

        const response = await fetch("http://localhost:3000/api/upload", {

            method: "POST",

            body: formData

        });

        const result = await response.json();

        alert("Upload thành công!");

        console.log(result);

    }

    return (

        <div style={{ padding: 30 }}>

            <h2>Upload Quyết định</h2>

            <input

                type="file"

                accept=".pdf"

                onChange={(e) => setFile(e.target.files[0])}

            />

            <br /><br />

            <button onClick={handleUpload}>

                Upload PDF

            </button>

        </div>

    );

}