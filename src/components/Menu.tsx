import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import "assets/menu.scss";

import PersonIcon from "@material-ui/icons/Person";
import ScheduleIcon from "@material-ui/icons/Schedule";

const options = [
  {
    name: "Usuarios",
    icon: PersonIcon,
    url: "/user",
  },
  {
    name: "Horarios",
    icon: ScheduleIcon,
    url: "/schedule",
  },
];

const Menu = () => {
  let location = useLocation();
  return (
    <div className="menu">
      {options.map((item, index) => {
        const active = location.pathname.includes(item.url);
        return (
          <Link key={index} to={item.url}>
            <div className={`menu-item ${active ? "active" : ""}`}>
              {React.createElement(item.icon, { className: "menu-item_logo" })}
              <span>{item.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
