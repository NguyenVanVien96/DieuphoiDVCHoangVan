export default function OfficerBanner() {
  return (
    <section className="officer-banner">

      <div className="officer-banner-content">

        {/* Bên trái */}

        <div className="officer-banner-left">

          <span className="officer-tag">
            CỔNG ĐIỀU PHỐI HỆ THỐNG NGHIỆP VỤ
          </span>

          <h1>
            Khu vực dành cho Cán bộ
          </h1>

          <p>
            Điều phối tập trung các hệ thống Một cửa điện tử của Bộ, ngành,
            giúp cán bộ truy cập nhanh, giảm thời gian tìm kiếm,
            nâng cao hiệu quả xử lý công việc.
          </p>

          <div className="officer-feature">

            <div>✔ Truy cập nhanh hệ thống các Bộ</div>

            <div>✔ Một điểm truy cập duy nhất</div>

            <div>✔ Giao diện đồng bộ - dễ sử dụng</div>

            <div>✔ Hoạt động 24/7</div>

          </div>

        </div>

        {/* Bên phải */}

        <div className="officer-banner-right">

          <div className="officer-stat">

            <h2>07</h2>

            <span>Bộ tích hợp</span>

          </div>

          <div className="officer-stat">

            <h2>100+</h2>

            <span>Hệ thống</span>

          </div>

          <div className="officer-stat">

            <h2>24/7</h2>

            <span>Sẵn sàng</span>

          </div>

          <div className="officer-stat">

            <h2>01</h2>

            <span>Cổng điều phối</span>

          </div>

        </div>

      </div>

    </section>
  );
}