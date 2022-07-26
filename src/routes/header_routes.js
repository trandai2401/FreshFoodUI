import config from "../config";

const header_routes = [
  { title: "Trang chủ", to: config.routes.home },
  {
    title: "Sản phẩm",
    list: [
      { title: "Trái cây", icon: <i className="fa-solid fa-apple-whole" /> },
      {
        title: "Vật phẩm khô",
        icon: <i className="fa-solid fa-wheat-awn"></i>,
      },
      { title: "Rau củ", icon: <i className="fa-solid fa-seedling"></i> },
      { title: " Thịt tươi", icon: <i className="fa-solid fa-cow"></i> },
      {
        title: "Hải sản",
        icon: <i className="fa-brands fa-octopus-deploy"></i>,
      },
    ],
  },
  { title: "Tin tức", to: config.routes.tinTuc },
  { title: "Liên hệ", to: config.routes.lienHe },
];
export default header_routes;
