import React from "react";
import {
  AiFillHome,
  AiOutlineProject,
  AiFillThunderbolt,
  AiOutlineProfile,
  AiTwotonePhone,
} from "react-icons/ai";

const navItems = [
  { id: 0, name: "Home 🍕", href: "#home", icon: AiFillHome },
  { id: 1, name: "Skills 🍔", href: "#skills", icon: AiOutlineProject },
  { id: 2, name: "About 🌭", href: "#about", icon: AiOutlineProfile },
  { id: 3, name: "Projects 🥓", href: "#projects", icon: AiFillThunderbolt },
  { id: 4, name: "Contact 📞", href: "#contact", icon: AiTwotonePhone },
];

const Nav = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
         bg-[#202225] text-white shadow z-[500]"
    >
      {navItems.map((item) => (
        <a href={item.href} key={"nav: " + item.id}>
          <div className="sidebar-icon group">
            <item.icon size="28" />

            <span className="sidebar-tooltip group-hover:scale-100">{item.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Nav;