import { useNavigate } from "react-router-dom";
import "../../styles/common.css";

export default function BackButton({
  title = "Trang chủ",
  current = ""
}) {

  const navigate = useNavigate();

  return (

    <div className="top-toolbar">

      <button
        className="btn-back-large"
        onClick={() => navigate("/")}
      >
        ← Quay về Trang chủ
      </button>

      <div className="page-location">

        <span>{title}</span>

        {

          current && (

            <>

              <span className="divider">/</span>

              <strong>{current}</strong>

            </>

          )

        }

      </div>

    </div>

  );

}