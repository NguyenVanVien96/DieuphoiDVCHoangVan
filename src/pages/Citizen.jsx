import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryBanner from "../components/citizen/CategoryBanner";
import SearchBar from "../components/citizen/SearchBar";
import CategoryMenu from "../components/citizen/CategoryMenu";
import ProcedureList from "../components/citizen/ProcedureList";
import SearchResult from "../components/citizen/SearchResult";
import BackButton from "../components/common/BackButton";
import { citizenServices } from "../data/citizenServices";

import "../styles/citizen.css";

export default function Citizen() {

    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");

    const [currentCategory, setCurrentCategory] = useState(null);

    /*
    ============================================
    GỘP TOÀN BỘ THỦ TỤC
    ============================================
    */

    const allServices = useMemo(() => {

        return citizenServices.flatMap((category, categoryIndex) =>

            category.services.map(service => ({

                ...service,

                category: category.category,

                categoryIndex

            }))

        );

    }, []);

    /*
    ============================================
    TÌM KIẾM TOÀN WEBSITE
    ============================================
    */

    const searchResults = useMemo(() => {

    if (!keyword.trim()) return [];

    const text = keyword.toLowerCase().trim();

    return allServices.filter(service =>

        service.name.toLowerCase().includes(text) ||

        (service.code &&
            service.code.toLowerCase().includes(text))

    );

}, [keyword, allServices]);

    /*
    ============================================
    THỦ TỤC THEO LĨNH VỰC
    ============================================
    */

    const categoryServices = useMemo(() => {

        if (currentCategory === null) return [];

        return citizenServices[currentCategory].services;

    }, [currentCategory]);

    /*
    ============================================
    CHỌN THỦ TỤC TỪ KẾT QUẢ TÌM KIẾM
    ============================================
    */

    const handleSelectProcedure = (service) => {

        setKeyword("");

        setCurrentCategory(service.categoryIndex);

        setTimeout(() => {

            const element = document.getElementById(

                "procedure-" + service.id

            );

            if (element) {

                element.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            }

        }, 250);

    };

    return (

        <>

            <Header />

            <main className="citizen-page">

                <div className="container">

                    {/* Toolbar */}

                    <section className="top-toolbar">

                        <button

                            className="btn-back-large"

                            onClick={() => navigate(-1)}

                        >

                            ← Quay lại trang trước

                        </button>

                        <div className="breadcrumb">

                            <span>Trang chủ</span>

                            <span>/</span>

                            <strong>Công dân</strong>

                        </div>

                    </section>

                    {/* Banner */}

                    <CategoryBanner />

                    {/* Search */}

                    <SearchBar

                        keyword={keyword}

                        setKeyword={setKeyword}

                    />

                    {/* Có từ khóa → Hiện Search */}

                    {

                        keyword.trim() !== ""

                        ?

                        (

                            <SearchResult

                                results={searchResults}

                                onSelect={handleSelectProcedure}

                            />

                        )

                        :

                        (

                            <>

                                <CategoryMenu

                                    categories={citizenServices}

                                    currentCategory={currentCategory}

                                    setCurrentCategory={setCurrentCategory}

                                />

                                {

                                    currentCategory !== null &&

                                    <ProcedureList

                                        title={citizenServices[currentCategory].category}

                                        services={categoryServices}

                                    />

                                }

                            </>

                        )

                    }

                </div>

            </main>

    <Footer />

        </>

    );

}