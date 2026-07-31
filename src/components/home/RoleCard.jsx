import { Link } from "react-router-dom";
import { UserRound, Building2 } from "lucide-react";

import "../../styles/home.css";

export default function RoleCard() {
  return (
    <section className="role-section">

      <div className="container">

        <h2 className="section-title">
          LỰA CHỌN ĐỐI TƯỢNG
        </h2>

        <p className="section-subtitle">
          Vui lòng lựa chọn đúng nhóm đối tượng để sử dụng hệ thống
        </p>

        <div className="role-grid">

          {/* Công dân */}

          <div className="role-card citizen-card">

            <div className="role-icon-circle">

              <UserRound size={72} strokeWidth={2.2} />

            </div>

            <h3>

              CÔNG DÂN

            </h3>

            <Link
              to="/citizen"
              className="role-button"
            >

              TRUY CẬP

            </Link>

          </div>

          {/* Cán bộ */}

          <div className="role-card officer-card">

            <div className="role-icon-circle">

              <Building2 size={72} strokeWidth={2.2} />

            </div>

            <h3>

              CÁN BỘ

            </h3>

            <Link
              to="/officer"
              className="role-button"
            >

              TRUY CẬP

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}