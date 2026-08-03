import { useState } from "react";
import { uploadPdf } from "../services/api";

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

            const result = await uploadPdf(formData);

            setMessage(
                `Upload thành công. Đã nhận diện ${result.total} thủ tục.`
            );

            setFile(null);

        }

        catch (err) {

            console.error(err);

            setMessage(err.message || "Upload thất bại.");

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

            {

                file && (

                    <p>

                        <strong>File:</strong> {file.name}

                    </p>

                )

            }

            <button onClick={handleUpload}>

                Upload PDF

            </button>

            <br /><br />

            <strong>{message}</strong>

        </div>

    );

}