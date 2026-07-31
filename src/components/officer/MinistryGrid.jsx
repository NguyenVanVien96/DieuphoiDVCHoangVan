import MinistryCard from "./MinistryCard";
import { officerServices } from "../../data/officerServices";

export default function MinistryGrid() {

    return (

        <section className="ministry-section">

            <div className="section-header">

                <div>

                    <h2>
                        Hệ thống các Bộ
                    </h2>

                    <p>
                        Truy cập nhanh hệ thống Một cửa điện tử của các Bộ, ngành.
                    </p>

                </div>

                <div className="section-badge">

                    {officerServices.length} Bộ

                </div>

            </div>

            <div className="ministry-grid">

                {

                    officerServices.map((ministry) => (

                        <MinistryCard

                            key={ministry.id}

                            ministry={ministry}

                        />

                    ))

                }

            </div>

        </section>

    );

}