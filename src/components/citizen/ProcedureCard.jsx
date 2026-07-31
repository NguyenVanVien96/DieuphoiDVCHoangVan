export default function ProcedureCard({ service }) {

    return (

        <div className="procedure-card">

            <div className="procedure-top">

                <div className="procedure-icon">

                    📄

                </div>

                <div className="procedure-level">

                    {service.level}

                </div>

            </div>

            <h3>

                {service.name}

            </h3>

            <div className="procedure-info">

                <p>

                    🏢 {service.agency}

                </p>

                <p>

                    ⏱ {service.time}

                </p>

            </div>

            <a

                href={service.url}

                target="_blank"

                rel="noopener noreferrer"

                className="btn-service"

            >

                Thực hiện

            </a>

        </div>

    );

}