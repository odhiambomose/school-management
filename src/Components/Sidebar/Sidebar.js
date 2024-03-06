"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../Sidebar/Sidebar.module.css";

import { menuItem } from "../../sidedata";
const Sidebar = () => {
  const [active, setActive] = useState("");

  function handleActive(e, link) {
    console.log(e.target.textContent.toLowerCase() === link.name.toLowerCase());
    return e.target.textContent.toLowerCase() === link.name.toLowerCase()
      ? setActive(link.name.toLowerCase())
      : setActive("");
  }

  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={styles.bgside}>
      {menuItem.map((item, key) => {
        return (
          <div
            className={styles.side}
            key={key}
            style={{
              background:
                item.name.toLowerCase() === active ? "black" : "",
                color:item.name.toLowerCase() === active ? "white" : "black",
            }}
            id={item.name.toLowerCase() === active ? "active" : ""}
            onClick={(e) => handleActive(e, item)}
          >
            <p className={styles.icon}>{item.icon}</p>

            <p className={styles.textcolor}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
