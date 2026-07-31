import { NavLink } from "react-router-dom";
import "../../styles/header.css";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
export default function Header() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentTime(new Date());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <header className="header">

            <div className="container header-container">

                {/* Logo */}

                <NavLink to="/" className="logo">

                    <div className="logo-icon">

    <img
        src={logo}
        alt="Logo"
        className="logo-image"
    />

</div>

                    <div className="logo-text">

                        <h2>CỔNG THÔNG TIN ĐIỀU PHỐI XÃ HOÀNG VÂN</h2>

                        <span>Trung tâm Phục vụ Hành chính công</span>

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

                {/* Thời gian */}

                <div className="header-time">

                    <div className="time-date">

                        {currentTime.toLocaleDateString("vi-VN", {

                            weekday: "long",

                            day: "2-digit",

                            month: "2-digit",

                            year: "numeric",

                        })}

                    </div>

                    <div className="time-clock">

                        {currentTime.toLocaleTimeString("vi-VN")}

                    </div>

                </div>

            </div>

        </header>

    );

}
<NavLink to="/procedure-status">
    Tra cứu thủ tục bãi bỏ
</NavLink>