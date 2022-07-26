import config from "../config";

const header_routes = [
  { title: "Trang chủ", to: config.routes.home },
  {
    title: "Sản phẩm",
    to: config.routes.sanPham,
    list: [
      {
        id: 1,
        title: "Trái cây",
        icon: <i className="fa-solid fa-apple-whole" />,
      },
      {
        id: 2,
        title: "Vật phẩm khô",
        icon: <i className="fa-solid fa-wheat-awn"></i>,
      },
      { id: 3, title: "Rau củ", icon: <i className="fa-solid fa-seedling" /> },
      { id: 4, title: " Thịt tươi", icon: <i className="fa-solid fa-cow" /> },
      {
        id: 5,
        title: "Hải sản",
        icon: <i className="fa-brands fa-octopus-deploy" />,
      },
    ],
  },
  { title: "Tin tức", to: config.routes.tinTuc },
  { title: "Liên hệ", to: config.routes.lienHe },
];
const LoggedIn = [{}];
export default header_routes;
