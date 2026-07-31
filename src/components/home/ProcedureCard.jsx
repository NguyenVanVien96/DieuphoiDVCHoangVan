import "../../styles/home.css";

export default function ProcedureCard({ service }) {

    return (

        <div className="procedure-card">

            <div className="procedure-left">

                <div className="procedure-icon">
                    📄
                </div>

                <div className="procedure-content">

                    <h3>
                        {service.name}
                    </h3>

                    <div className="procedure-info">

                        <span>🏛 {service.agency}</span>

                        <span>⭐ {service.level}</span>

                        <span>⏱ {service.time}</span>

                    </div>

                </div>

            </div>

            <div className="procedure-right">

                <a
                    href={service.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-service"
                >
                    Thực hiện
                </a>

            </div>

        </div>

    );

}