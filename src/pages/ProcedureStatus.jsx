import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import {
    searchProcedure,
    getPdfUrl
} from "../services/api";

import "../styles/procedureStatus.css";

export default function ProcedureStatus() {

    const [params] = useSearchParams();

    const [keyword, setKeyword] = useState("");

    const [procedures, setProcedures] = useState([]);

    const [loading, setLoading] = useState(false);

    const timer = useRef(null);

    /*
    ==========================================
    TRA CỨU
    ==========================================
    */

    async function handleSearch(value = keyword) {

        try {

            setLoading(true);

            const data = await searchProcedure(value);

            setProcedures(data);

        }

        catch (err) {

            console.error(err);

            setProcedures([]);

        }

        finally {

            setLoading(false);

        }

    }

    /*
    ==========================================
    ĐỌC KEYWORD TỪ URL
    ==========================================
    */

    useEffect(() => {

        const kw = params.get("keyword") || "";

        setKeyword(kw);

        if (kw) {

            handleSearch(kw);

        }

    }, [params]);

    return (

        <>

            <Header />

            <main className="procedure-status-page">

                <div className="container">

                    <h1>Tra cứu thủ tục hành chính</h1>

                    <p className="description">

                        Nhập tên hoặc mã thủ tục để tra cứu.

                    </p>

                    <div className="search-area">

                        <input

                            className="search-box"

                            type="text"

                            placeholder="Ví dụ: OCOP hoặc 1.003524.H05"

                            value={keyword}

                            onChange={(e) => {

                                const value = e.target.value;

                                setKeyword(value);

                                clearTimeout(timer.current);

                                timer.current = setTimeout(() => {

                                    handleSearch(value);

                                }, 300);

                            }}

                            onKeyDown={(e) => {

                                if (e.key === "Enter") {

                                    clearTimeout(timer.current);

                                    handleSearch();

                                }

                            }}

                        />

                        <button

                            className="search-btn"

                            onClick={() => handleSearch()}

                        >

                            Tra cứu

                        </button>

                    </div>

                    {

                        loading &&

                        <p className="description">

                            Đang tra cứu...

                        </p>

                    }

                    {

                        !loading &&

                        keyword !== "" &&

                        procedures.length === 0 &&

                        <div className="empty-result">

                            Không tìm thấy thủ tục.

                        </div>

                    }

                    {

                        procedures.map(item => (

                            <div

                                className="status-card"

                                key={item.id}

                            >

                                <h3>

                                    {item.code || "Không có mã"}

                                </h3>

                                <h4>

                                    {item.name}

                                </h4>

                                <p>

                                    <strong>Trạng thái:</strong>{" "}

                                    {

                                        item.status === "Đã bãi bỏ" && (

                                            <span className="status abolished">

                                                🔴 Đã bãi bỏ

                                            </span>

                                        )

                                    }

                                    {

                                        item.status === "Mới ban hành" && (

                                            <span className="status active">

                                                🟢 Mới ban hành

                                            </span>

                                        )

                                    }

                                    {

                                        item.status === "Đã thay thế" && (

                                            <span className="status replaced">

                                                🟠 Đã thay thế

                                            </span>

                                        )

                                    }

                                    {

                                        ![
                                            "Đã bãi bỏ",
                                            "Mới ban hành",
                                            "Đã thay thế"
                                        ].includes(item.status) && (

                                            <span>

                                                {item.status}

                                            </span>

                                        )

                                    }

                                </p>

                                <p>

                                    <strong>Quyết định số:</strong>{" "}

                                    {item.decision || "Không có"}

                                </p>

                                <p>

                                    <strong>Ngày ban hành:</strong>{" "}

                                    {item.issuedDate || "Không có"}

                                </p>

                                {

                                    item.replacement &&

                                    <p>

                                        <strong>Thay thế bởi:</strong>{" "}

                                        {item.replacement}

                                    </p>

                                }

                                {

                                    item.replacementName &&

                                    <p>

                                        <strong>Tên thủ tục thay thế:</strong>{" "}

                                        {item.replacementName}

                                    </p>

                                }

                                {

                                    item.pdf &&

                                    <a

                                        href={getPdfUrl(item.pdf)}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="download-btn"

                                    >

                                        📄 Tải Quyết định

                                    </a>

                                }

                            </div>

                        ))

                    }

                </div>

            </main>

            <Footer />

        </>

    );

}