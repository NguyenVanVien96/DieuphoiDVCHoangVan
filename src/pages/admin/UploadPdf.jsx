import { useState } from "react";
import { uploadPdf } from "../services/api";

export default function UploadPdf() {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    async function handleUpload() {

        if (!file) {

            alert("Vui lòng chọn file PDF.");

            return;

        }

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append("pdf", file);

            const data = await uploadPdf(formData);

            setResult(data);

            alert(`Upload thành công.\nĐã nhận ${data.total} thủ tục.`);

        }

        catch (err) {

            console.error(err);

            alert("Upload thất bại.");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="container">

            <h1>UPLOAD QUYẾT ĐỊNH PDF</h1>

            <input

                type="file"

                accept=".pdf"

                onChange={(e)=>setFile(e.target.files[0])}

            />

            <br/><br/>

            <button

                onClick={handleUpload}

                disabled={loading}

            >

                {

                    loading

                    ?

                    "Đang xử lý..."

                    :

                    "Upload PDF"

                }

            </button>

            {

                result &&

                <pre>

                    {JSON.stringify(result,null,2)}

                </pre>

            }

        </div>

    );

}