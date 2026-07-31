import "../../styles/home.css";

export default function SearchBar({ keyword, setKeyword }) {

    return (

        <section className="search-section">

            <div className="container">

                <div className="search-box">

                    <span className="search-icon">

                        🔍

                    </span>

                    <input

                        type="text"

                        placeholder="Tìm kiếm thủ tục hành chính..."

                        value={keyword}

                        onChange={(e) => setKeyword(e.target.value)}

                    />

                </div>

            </div>

        </section>

    );

}