import { justiceServices } from "./justiceServices";
import { certificationServices } from "./certificationServices";
import { landServices } from "./landServices";

export const citizenServices = [

  {
    id: 1,
    category: "Hộ tịch",
    icon: "👶",
    color: "#1976D2",
    description: "Khai sinh, kết hôn, khai tử",
    services: justiceServices
  },

  {
    id: 2,
    category: "Chứng thực",
    icon: "📝",
    color: "#00A651",
    description: "Chứng thực bản sao, chữ ký",
    services: certificationServices
  },

  {
    id: 3,
    category: "Đất đai",
    icon: "🏡",
    color: "#8B5E3C",
    description: "Đăng ký đất đai, cấp Giấy chứng nhận",
    services: landServices
  }

];