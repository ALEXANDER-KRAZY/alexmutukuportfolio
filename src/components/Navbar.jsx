import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState();
  
  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}//z- 20 appear above all elements
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
      to="/" //to top of the page
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");//keeps  track of where we curreently are on our page
        window.scrollTo(0, 0);//top of our page
      }}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />{/*height and width*/}
        <p className="text-white text-[18px] font-bold cursor-pointer">Alex Mutuku</p>
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((link => (
        <li
        key={link.id}
        //check if nav links are active
        className={`${
          active === link.title
          ? "text-white" //if active
          : "text-secondary"//if not active
        }`}
        >
          <a href={`${link.id}`}>{link.title}</a>
        </li>
        )))}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
