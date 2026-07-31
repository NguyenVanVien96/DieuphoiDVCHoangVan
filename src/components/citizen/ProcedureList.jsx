export default function ProcedureList({ title, services }) {

    if (!services.length) return null;

    return (

        <section className="procedure-section">

            <h2 className="procedure-title">

                {title}

            </h2>

            <div className="procedure-grid">

                {

                    services.map(service => (

                        <a

                            key={service.id}

                            href={service.url}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="procedure-item"

                        >

                            <div className="procedure-icon">

                                {service.icon || "📄"}

                            </div>

                            <h3>

    {service.name}

    <span className="procedure-code">

        Mã: {service.code}

    </span>

                            </h3>

                            <p>

                                {service.agency}

                            </p>

                            <span>

                                Thực hiện →

                            </span>

                        </a>

                    ))

                }

            </div>

        </section>

    );

}