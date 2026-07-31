import { useMemo, useState } from "react";

import { citizenServices } from "../../data/citizenServices";

import SearchBar from "./SearchBar";
import ProcedureList from "./ProcedureList";

import "../../styles/home.css";

export default function CategoryGrid() {

    // Lĩnh vực đang chọn
    const [currentCategory, setCurrentCategory] = useState(0);

    // Từ khóa tìm kiếm
    const [keyword, setKeyword] = useState("");

    // Danh sách thủ tục sau khi lọc
    const services = useMemo(() => {

        const list = citizenServices[currentCategory].services;

        if (!keyword.trim()) {
            return list;
        }

        return list.filter((item) =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
        );

    }, [currentCategory, keyword]);

    return (

        <section className="category-section">

            <div className="container">

                <h2 className="section-title">

                    Lĩnh vực dịch vụ công

                </h2>

                <p className="section-subtitle">

                    Chọn lĩnh vực để xem danh sách thủ tục hành chính

                </p>

                {/* Thanh tìm kiếm */}

                <SearchBar
                    keyword={keyword}
                    setKeyword={setKeyword}
                />

                {/* Danh sách lĩnh vực */}

                <div className="category-grid">

                    {citizenServices.map((item, index) => (

                        <button
                            key={index}
                            className={
                                currentCategory === index
                                    ? "category-card active"
                                    : "category-card"
                            }
                            onClick={() => setCurrentCategory(index)}
                        >

                            <div className="category-icon">

                                📂

                            </div>

                            <span>

                                {item.category}

                            </span>

                        </button>

                    ))}

                </div>

                {/* Danh sách thủ tục */}

                <ProcedureList
                    services={services}
                />

            </div>

        </section>

    );

}