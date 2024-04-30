import React from "react";
import menu_data from "../menu-data";
import Link from "next/link";

const MainMenu = () => {
  return (
    <ul className="mainmenu">
      {menu_data.map((menu, i) => (
        <li key={i}>
          <Link href={`${menu.link}`}>
            <a>{menu.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
