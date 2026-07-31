import { useState } from "react";

export default function UploadPdf() {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    async function handleUpload() {

        if (!file) {

            alert("Chọn file PDF trước.");

            return;

        }

        const formData = new FormData();

        formData.append("pdf", file);

        try {

            const response = await fetch(
                "http://localhost:3000/api/upload",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            setMessage(result.message);

        } catch (err) {

            console.log(err);

            setMessage("Upload thất bại.");

        }

    }

    return (

        <div
            style={{
                maxWidth: 700,
                margin: "40px auto",
                padding: 30,
                border: "1px solid #ddd",
                borderRadius: 8
            }}
        >

            <h2>Upload Quyết định TTHC</h2>

            <input

                type="file"

                accept=".pdf"

                onChange={(e) => setFile(e.target.files[0])}

            />

            <br /><br />

            <button onClick={handleUpload}>

                Upload PDF

            </button>

            <br /><br />

            <strong>{message}</strong>

        </div>

    );

}