import React, { useState } from "react";
import { useRouter } from "next/router";
import menu_data from "../menu-data";
import Link from "next/link";

const MainMenu = () => {
  const router = useRouter();
  const num = 32;

  return (
    <ul className="mainmenu">
      {menu_data.map((menu, i) => (
        <li key={i}>
          <Link href={`${menu.link}`}>
            <a
              className={
                router.pathname === menu.link ||
                (router.pathname === `blog-details/${num}` &&
                  menu.link === "/blog")
                  ? "activee"
                  : ""
              }
            >
              {menu.title}
              {router.pathname === menu.link && (
                <div className="active-underline" />
              )}
            </a>
          </Link>
        </li>
      ))}
      <style jsx>{`
        .activee,
        .activee:hover {
          color: #ffa51f !important;
        }
      `}</style>
    </ul>
  );
};

export default MainMenu;
