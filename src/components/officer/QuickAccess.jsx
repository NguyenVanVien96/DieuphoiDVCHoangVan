export default function QuickAccess() {

    const shortcuts = [

        {
            icon:"🌐",
            title:"Cổng DVC Quốc gia",
            url:"https://dichvucong.gov.vn"
        },

        {
            icon:"🪪",
            title:"VNeID",
            url:"https://vneid.gov.vn"
        },

        {
            icon:"📑",
            title:"Hệ thống VBQPPL",
            url:"https://vanban.chinhphu.vn"
        },

        {
            icon:"📊",
            title:"Cổng Báo cáo",
            url:"https://baocaochinhphu.gov.vn"
        }

    ];

    return(

        <section className="quick-access">

            <h2>

                Truy cập nhanh

            </h2>

            <p>

                Một số hệ thống thường xuyên sử dụng.

            </p>

            <div className="quick-grid">

                {

                    shortcuts.map((item,index)=>(

                        <a

                            key={index}

                            href={item.url}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="quick-card"

                        >

                            <div className="quick-icon">

                                {item.icon}

                            </div>

                            <h4>

                                {item.title}

                            </h4>

                        </a>

                    ))

                }

            </div>

        </section>

    )

}