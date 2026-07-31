import { useEffect, useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import {

    getProcedureStatus,

    deleteProcedure,

    uploadPdf,

    getPdfUrl

} from "../services/api";

import "../styles/admin.css";

export default function Admin() {

    const [procedures, setProcedures] = useState([]);

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    /*
    ==============================================
    LOAD DATA
    ==============================================
    */

    async function loadData() {

        try {

            const data = await getProcedureStatus();

            setProcedures(data);

        }

        catch (err) {

            console.error(err);

        }

    }

    useEffect(() => {

        loadData();

    }, []);

    /*
    ==============================================
    DELETE
    ==============================================
    */

    async function handleDelete(id) {

        if (!window.confirm("Bạn có chắc chắn muốn xóa?")) {

            return;

        }

        try {

            await deleteProcedure(id);

            loadData();

            alert("Đã xóa.");

        }

        catch (err) {

            console.error(err);

            alert("Không thể xóa.");

        }

    }

    /*
    ==============================================
    UPLOAD
    ==============================================
    */

    async function handleUpload() {

        if (!file) {

            alert("Vui lòng chọn file PDF.");

            return;

        }

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append("pdf", file);

            const result = await uploadPdf(formData);

            alert(

                `Upload thành công.\n\n` +

                `Đã nhận diện ${result.total} thủ tục.`

            );

            setFile(null);

            loadData();

        }

        catch (err) {

            console.error(err);

            alert(err.message);

        }

        finally {

            setLoading(false);

        }

    }

    /*
    ==============================================
    UI
    ==============================================
    */

    return (

        <>

            <Header />

            <main className="admin-page">

                <div className="container">

                    <h1>

                        QUẢN TRỊ THỦ TỤC HÀNH CHÍNH

                    </h1>

                    <div className="upload-box">

                        <h2>

                            Upload Quyết định PDF

                        </h2>

                        <input

                            type="file"

                            accept=".pdf"

                            onChange={(e) =>

                                setFile(e.target.files[0])

                            }

                        />

                        {

                            file && (

                                <p>

                                    <strong>

                                        File:

                                    </strong>

                                    {" "}

                                    {file.name}

                                </p>

                            )

                        }

                        <button

                            className="upload-btn"

                            disabled={loading}

                            onClick={handleUpload}

                        >

                            {

                                loading

                                    ? "Đang phân tích..."

                                    : "Upload PDF"

                            }

                        </button>

                    </div>

                    <hr />

                    <h2>

                        Danh sách thủ tục

                    </h2>

                    <table className="admin-table">

                        <thead>

                            <tr>

                                <th>Mã</th>

                                <th>Tên thủ tục</th>

                                <th>Trạng thái</th>

                                <th>Quyết định</th>

                                <th>Ngày ban hành</th>

                                <th>PDF</th>

                                <th>Thao tác</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                procedures.length === 0

                                ?

                                (

                                    <tr>

                                        <td

                                            colSpan="7"

                                            style={{

                                                textAlign:"center"

                                            }}

                                        >

                                            Chưa có dữ liệu.

                                        </td>

                                    </tr>

                                )

                                :

                                procedures.map(item => (

                                    <tr key={item.id}>

                                        <td>

                                            {item.code}

                                        </td>

                                        <td>

                                            {item.name}

                                        </td>

                                        <td>

                                            {item.status}

                                        </td>

                                        <td>

                                            {item.decision}

                                        </td>

                                        <td>

                                            {item.issuedDate}

                                        </td>

                                        <td>

                                            {

                                                item.sourceFile &&

                                                (

                                                    <a

                                                        href={

                                                            getPdfUrl(

                                                                item.sourceFile

                                                            )

                                                        }

                                                        target="_blank"

                                                        rel="noreferrer"

                                                    >

                                                        📄 Tải

                                                    </a>

                                                )

                                            }

                                        </td>

                                        <td>

                                            <button>

                                                Sửa

                                            </button>

                                            <button

                                                onClick={()=>

                                                    handleDelete(

                                                        item.id

                                                    )

                                                }

                                            >

                                                Xóa

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </main>

            <Footer />

        </>

    );

}