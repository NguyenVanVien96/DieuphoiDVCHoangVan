import { NavLink } from "react-router-dom";
import "../../styles/header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="container header-container">

        {/* Logo */}

        <NavLink to="/" className="logo">

          <div className="logo-icon">
            DV
          </div>

          <div className="logo-text">

            <h2>Điều phối DVC</h2>

            <span>Hoàng Vân</span>

          </div>

        </NavLink>

        {/* Menu */}

        <nav className="menu">

          <NavLink to="/">
            Trang chủ
          </NavLink>

          <NavLink to="/citizen">
            Công dân
          </NavLink>

          <NavLink to="/officer">
            Cán bộ
          </NavLink>

        </nav>

        {/* Nút bên phải */}

        <div className="header-action">

          <button className="login-btn">
            Tra cứu hồ sơ
          </button>

        </div>

      </div>

    </header>
  );
}