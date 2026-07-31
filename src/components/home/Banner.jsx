import "../../styles/home.css";
import bannerBg from "../../assets/images/banner-bg.png";

export default function Banner() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="hero-overlay">

        <div className="container hero-container">

          <div className="hero-content">

            <h1>
            Điều phối DVC Hoàng Vân
            </h1>

            <p className="hero-description">
              Tra cứu và điều hướng nhanh đến các Cổng dịch vụ công
              của Bộ, ngành trên một nền tảng thống nhất.
            </p>

            <div className="hero-divider"></div>

            <p className="hero-slogan">
              Kết nối • Tra cứu • Điều hướng
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}