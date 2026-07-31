export default function SearchResult({

    results,

    onSelect

}){

    return(

        <div className="search-result">

            <div className="search-result-header">

                Tìm thấy {results.length} thủ tục

            </div>

            {

                results.length===0

                ?

                (

                    <div className="search-empty">

                        Không tìm thấy thủ tục.

                    </div>

                )

                :

                results.map(item=>(

                    <div

                        key={item.id}

                        className="search-item"

                        onClick={()=>onSelect(item)}

                    >

                        <div className="search-left">

                            <div className="search-icon">

                                {item.icon || "📄"}

                            </div>

                            <div className="search-info">

                                <div className="search-name">

                                    {item.name}

                                </div>

                                <div className="search-meta">

                                    <div className="search-category">

                                        {item.category}

                                    </div>

                                    <div className="search-agency">

                                        {item.agency}

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="search-arrow">

                            →

                        </div>

                    </div>

                ))

            }

        </div>

    )

}