import ProcedureCard from "./ProcedureCard";

export default function ProcedureList({ services }) {

    if (!services || services.length === 0) {
        return (
            <div className="no-result">
                Không tìm thấy thủ tục phù hợp.
            </div>
        );
    }

    return (

        <div className="procedure-list">

            {services.map((service) => (

                <ProcedureCard
                    key={service.id}
                    service={service}
                />

            ))}

        </div>

    );

}