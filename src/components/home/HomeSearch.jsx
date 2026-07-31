import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

import { citizenServices } from "../../data/citizenServices";
import "../../styles/home.css";

export default function HomeSearch() {

    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");

    const services = useMemo(() => {

        return citizenServices.flatMap(category =>

            category.services.map(service => ({
                ...service,
                category: category.category
            }))

        );

    }, []);

    const results = keyword.trim() === ""
        ? []
        : services.filter(item =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
        );

    function openService(service) {

        navigate("/citizen", {
            state: {
                keyword: service.name
            }
        });

    }

    return (

        <section className="home-search">

            <div className="container">

                <div className="home-search-title">

                    <h2>

                        Tra cứu thủ tục hành chính

                    </h2>

                    <p>

                        Tìm kiếm nhanh trên toàn bộ hệ thống điều phối dịch vụ công

                    </p>

                </div>

                <div className="home-search-box">

                    <Search className="search-svg" size={22} />

                    <input

                        type="text"

                        placeholder="Nhập tên thủ tục... Ví dụ: Khai sinh, Chứng thực..."

                        value={keyword}

                        onChange={(e)=>setKeyword(e.target.value)}

                    />

                </div>

                {

                    keyword.length>0 && (

                        <div className="home-search-result">

                            {

                                results.length>0 ? (

                                    results.map(service=>(

                                        <div

                                            key={service.id}

                                            className="home-search-item"

                                            onClick={()=>openService(service)}

                                        >

                                            <div>

                                                <strong>

                                                    {service.name}

                                                </strong>

                                                <span>

                                                    {service.category}

                                                </span>

                                            </div>

                                            <small>

                                                →

                                            </small>

                                        </div>

                                    ))

                                ) : (

                                    <div className="home-search-empty">

                                        Không tìm thấy thủ tục phù hợp

                                    </div>

                                )

                            }

                        </div>

                    )

                }

            </div>

        </section>

    );

}