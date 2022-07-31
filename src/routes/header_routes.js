import config from "../config";

const header_routes = [
  { title: "Trang chủ", to: config.routes.home },
  {
    title: "Sản phẩm",
    to: config.routes.sanPham,
    list: [
      {
        to: 1,
        title: "Trái cây",
        icon: <i className="fa-solid fa-apple-whole" />,
      },
      {
        to: 2,
        title: "Vật phẩm khô",
        icon: <i className="fa-solid fa-wheat-awn"></i>,
      },
      { to: 3, title: "Rau củ", icon: <i className="fa-solid fa-seedling" /> },
      { to: 4, title: " Thịt tươi", icon: <i className="fa-solid fa-cow" /> },
      {
        to: 5,
        title: "Hải sản",
        icon: <i className="fa-brands fa-octopus-deploy" />,
      },
    ],
  },
  { title: "Tin tức", to: config.routes.tinTuc },
  { title: "Liên hệ", to: config.routes.lienHe },
];

export const LoggedIn = [
  { title: "Tài khoản", to: "taikhoan" },
  { title: "Giỏ hàng", to: "taikhoan" },
];
export default header_routes;
