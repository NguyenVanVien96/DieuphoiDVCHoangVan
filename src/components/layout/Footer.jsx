import { Link } from "react-router-dom";
import {
  Home,
  User,
  Briefcase,
  Building2,
  Landmark,
  FileText,
  ShieldCheck
} from "lucide-react";

import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Call To Action */}

      <section className="footer-cta">

        <div className="container footer-cta-inner">

          <div>

            <h2>Sẵn sàng thực hiện dịch vụ công?</h2>

            <p>
              Truy cập nhanh đúng nhóm đối tượng để sử dụng các dịch vụ phù hợp.
            </p>

          </div>

          <div className="footer-cta-buttons">

            <Link to="/citizen" className="footer-btn-primary">
              Công dân
            </Link>

            <Link to="/officer" className="footer-btn-outline">
              Cán bộ
            </Link>

          </div>

        </div>

      </section>

      <div className="container">

        <div className="footer-grid">

          {/* Giới thiệu */}

          <div className="footer-col">

            <div className="footer-logo">

              <Building2 size={34} />

              <div>

                <h3>Điều phối DVC Hoàng Vân</h3>

                <span>Cổng điều phối dịch vụ công</span>

              </div>

            </div>

            <p className="footer-description">

              Một điểm truy cập tập trung giúp công dân và cán bộ
              dễ dàng tìm kiếm, tra cứu và thực hiện dịch vụ công trực tuyến
              nhanh chóng, thuận tiện.

            </p>

          </div>

          {/* Điều hướng */}

          <div className="footer-col">

            <h4>Điều hướng</h4>

            <ul>

              <li>
                <Link to="/">
                  <Home size={16} />
                  Trang chủ
                </Link>
              </li>

              <li>
                <Link to="/citizen">
                  <User size={16} />
                  Công dân
                </Link>
              </li>

              <li>
                <Link to="/officer">
                  <Briefcase size={16} />
                  Cán bộ
                </Link>
              </li>

            </ul>

          </div>

          {/* Truy cập nhanh */}

          <div className="footer-col">

            <h4>Truy cập nhanh</h4>

            <ul>

              <li>
                <a
                  href="https://dichvucong.gov.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Landmark size={16} />
                  Cổng DVC Quốc gia
                </a>
              </li>

              <li>
                <a
                  href="https://motcuabxd.moc.gov.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={16} />
                  Bộ Xây dựng
                </a>
              </li>

              <li>
                <a
                  href="https://motcua.moh.gov.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={16} />
                  Bộ Y tế
                </a>
              </li>

            </ul>

          </div>

          {/* Thống kê */}

          <div className="footer-col">

            <h4>Hệ thống</h4>

            <div className="footer-stats">

              <div>

                <strong>500+</strong>

                <span>Thủ tục</span>

              </div>

              <div>

                <strong>07</strong>

                <span>Bộ</span>

              </div>

              <div>

                <strong>24/7</strong>

                <span>Hoạt động</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <span>

            © 2026 Điều phối DVC Hoàng Vân

          </span>

          <span>

            <ShieldCheck size={15} />

            Version 2.0

          </span>

        </div>

      </div>

    </footer>
  );
}