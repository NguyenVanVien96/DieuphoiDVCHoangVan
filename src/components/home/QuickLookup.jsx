import { Link } from "react-router-dom";

import "../../styles/home.css";

export default function QuickLookup() {

    return (

        <section className="quick-lookup">

            <div className="container">

                <h2>Tra cứu nhanh</h2>

                <div className="lookup-grid">

                    <Link
                        className="lookup-card"
                        to="/procedure-status"
                    >
                        ⚖
                        <span>Tra cứu thủ tục bãi bỏ</span>
                    </Link>

                </div>

            </div>

        </section>

    );

}