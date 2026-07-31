export default function SearchBar({ keyword, setKeyword }) {

    return (

        <div className="search-box">

            <input
                type="text"
                placeholder="🔍 Tìm kiếm thủ tục hành chính..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />

        </div>

    );

}