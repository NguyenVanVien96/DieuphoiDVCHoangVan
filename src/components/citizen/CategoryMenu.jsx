export default function CategoryMenu({

    categories,

    currentCategory,

    setCurrentCategory

}) {

    return (

        <div className="category-grid">

            {categories.map((item, index) => (

                <div

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

                    <h3>

                        {item.category}

                    </h3>

                    <span>

                        {item.services.length} thủ tục

                    </span>

                </div>

            ))}

        </div>

    );

}