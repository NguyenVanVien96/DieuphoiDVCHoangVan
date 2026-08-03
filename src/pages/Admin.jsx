import { useEffect, useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import {
    getProcedureStatus,
    deleteProcedure,
    deleteSelected,
    clearProcedures,
    uploadPdf,
    getPdfUrl
} from "../services/api";

import "../styles/admin.css";


export default function Admin() {


    const [procedures, setProcedures] = useState([]);

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const [selected, setSelected] = useState([]);



    /*
    ======================================
    LOAD DATA
    ======================================
    */

    async function loadData() {

        try {

            const data = await getProcedureStatus();

            setProcedures(data);

        }
        catch(error) {

            console.error(error);

        }

    }



    useEffect(() => {

        loadData();

    }, []);





    /*
    ======================================
    DELETE ONE
    ======================================
    */

    async function handleDelete(id) {


        if(
            !window.confirm(
                "Bạn có chắc chắn muốn xóa thủ tục này?"
            )
        ){

            return;

        }


        try {

            await deleteProcedure(id);

            alert("Đã xóa.");

            loadData();

        }
        catch(error){

            console.error(error);

            alert(
                "Không thể xóa thủ tục."
            );

        }


    }






    /*
    ======================================
    SELECT
    ======================================
    */


    function toggle(id){


        setSelected(prev =>

            prev.includes(id)

            ?

            prev.filter(
                item => item !== id
            )

            :

            [
                ...prev,
                id
            ]

        );


    }



    function toggleAll(){


        if(
            selected.length === procedures.length
            &&
            procedures.length > 0
        ){

            setSelected([]);

        }
        else{

            setSelected(
                procedures.map(
                    item => item.id
                )
            );

        }


    }







    /*
    ======================================
    DELETE SELECTED
    ======================================
    */


    async function handleDeleteSelected(){


        if(selected.length === 0){

            alert(
                "Chưa chọn thủ tục."
            );

            return;

        }



        if(
            !window.confirm(
                "Xóa các thủ tục đã chọn?"
            )
        ){

            return;

        }



        try {


            await deleteSelected(selected);


            setSelected([]);


            loadData();


        }
        catch(error){

            console.error(error);

            alert(
                "Không thể xóa."
            );

        }


    }







    /*
    ======================================
    DELETE ALL
    ======================================
    */


    async function handleClear(){


        if(
            !window.confirm(
                "Xóa toàn bộ thủ tục?"
            )
        ){

            return;

        }



        try {


            await clearProcedures();


            setSelected([]);


            loadData();


        }
        catch(error){

            console.error(error);

            alert(
                "Không thể xóa dữ liệu."
            );

        }


    }








    /*
    ======================================
    UPLOAD PDF
    ======================================
    */


    async function handleUpload(){


        if(!file){

            alert(
                "Vui lòng chọn file PDF."
            );

            return;

        }



        try{


            setLoading(true);



            const formData =
                new FormData();



            formData.append(
                "pdf",
                file
            );



            const result =
                await uploadPdf(
                    formData
                );



            alert(
                `Upload thành công.
Đã nhận diện ${result.total} thủ tục.`
            );



            setFile(null);



            loadData();


        }
        catch(error){


            console.error(error);


            alert(
                error.message
            );


        }
        finally{

            setLoading(false);

        }


    }







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

                            onChange={
                                e =>
                                setFile(
                                    e.target.files[0]
                                )
                            }

                        />



                        {
                            file &&

                            <p>

                                <strong>
                                    File:
                                </strong>

                                {" "}

                                {file.name}

                            </p>
                        }



                        <button

                            className="upload-btn"

                            disabled={loading}

                            onClick={handleUpload}

                        >

                            {
                                loading
                                ?
                                "Đang phân tích..."
                                :
                                "Upload PDF"
                            }


                        </button>


                    </div>






                    <hr />





                    <h2>
                        Danh sách thủ tục
                    </h2>





                    <div
                        style={{
                            marginBottom:20,
                            display:"flex",
                            gap:"10px"
                        }}
                    >


                        <button

                            className="upload-btn"

                            onClick={
                                handleDeleteSelected
                            }

                        >

                            Xóa đã chọn

                        </button>




                        <button

                            className="upload-btn"

                            style={{
                                background:"#d32f2f"
                            }}

                            onClick={
                                handleClear
                            }

                        >

                            Xóa toàn bộ

                        </button>



                    </div>







                    <table className="admin-table">


                        <thead>


                            <tr>


                                <th>

                                    <input

                                        type="checkbox"

                                        checked={
                                            selected.length === procedures.length
                                            &&
                                            procedures.length > 0
                                        }

                                        onChange={toggleAll}

                                    />

                                </th>


                                <th>
                                    Mã
                                </th>


                                <th>
                                    Tên thủ tục
                                </th>


                                <th>
                                    Trạng thái
                                </th>


                                <th>
                                    Quyết định
                                </th>


                                <th>
                                    Ngày ban hành
                                </th>


                                <th>
                                    PDF
                                </th>


                                <th>
                                    Thao tác
                                </th>


                            </tr>


                        </thead>






                        <tbody>



                        {
                            procedures.length === 0

                            ?

                            <tr>

                                <td

                                    colSpan="8"

                                    style={{
                                        textAlign:"center"
                                    }}

                                >

                                    Chưa có dữ liệu.

                                </td>


                            </tr>


                            :


                            procedures.map(item => (


                                <tr key={item.id}>


                                    <td>


                                        <input

                                            type="checkbox"

                                            checked={
                                                selected.includes(
                                                    item.id
                                                )
                                            }

                                            onChange={() =>
                                                toggle(item.id)
                                            }

                                        />


                                    </td>




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
                                            item.pdf &&

                                            <a

                                                href={
                                                    getPdfUrl(
                                                        item.pdf
                                                    )
                                                }

                                                target="_blank"

                                                rel="noreferrer"

                                            >

                                                📄 Tải

                                            </a>

                                        }


                                    </td>





                                    <td>


                                        <button>

                                            Sửa

                                        </button>



                                        <button

                                            onClick={() =>
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