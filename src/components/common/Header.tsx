import { useState, useEffect, ReactElement } from "react";
import Link from "next/link";

import { IoMenu } from "react-icons/io5";

import { DropdownProps } from "@/models";

import CONSTANTS from "../../../constants/header-info.json";
import LogoHeader from "./LogoHeader";

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`min-h-10 h-fit md:h-full w-56 text-white block md:flex flex-row justify-center items-center relative hover:bg-tertiary-color hover:cursor-pointer duration-600 triangle-bottom triangle-bottom box-border md:hover:border-x`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      role="button"
    >
      <span
        className={`${
          isOpen ? "bg-secondary-blur-color text-xl" : "transparent"
        } md:bg-transparent h-10 w-full mr-4 box-border flex justify-center items-center transition-all duration-600`}
      >
        {title}
      </span>
      {isOpen && (
        <div
          className={`bg-primary-blur-color h-fit w-full block md:flex flex-col justify-center items-center md:absolute top-14`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

function Header(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(true);
    }
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 w-full h-14 shadow-md z-40 flex flex-row justify-start items-center bg-primary-color px-7"
      }
    >
      <button
        className={"md:hidden z-40"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IoMenu />
      </button>
      <LogoHeader page={"/"} />
      {isMenuOpen && (
        <div
          className={
            "h-screen w-screen fixed md:hidden top-14 left-0 z-30 bg-secondary-blur-color"
          }
        ></div>
      )}
      <div
        className={`h-screen md:h-full fixed top-14 md:top-0 ${
          isMenuOpen ? "left-0" : "-left-full"
        } z-50 md:relative w-46 md:w-96 flex flex-col md:flex-row justify-start md:justify-between items-center md:mx-8 bg-tertiary-color md:bg-transparent transition-all duration-200`}
      >
        <Dropdown title="Offices">
          <div className={"h-fit w-full md:border-x  px box-content"}>
            {CONSTANTS.offices.map((office) => (
              <Link
                className={
                  "h-8 w-full flex justify-center items-center hover:text-xl transition-bg duration-200 z-50 border-y border-secondary-blur-color md:bg-tertiary-color"
                }
                key={office.id}
                href={office.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {office.name}
              </Link>
            ))}
          </div>
          <div className="triangle"></div>
        </Dropdown>
        <Dropdown title="EU Projects">
          <div className={"h-fit w-full md:border-x  px box-content"}>
            <Link
              className={
                "h-8 w-full flex justify-center items-center hover:text-xl transition-bg duration-200 z-50 border-y border-secondary-blur-color md:bg-tertiary-color"
              }
              href="/eu-projects"
            >
              All Projects
            </Link>
          </div>
          <div className="triangle"></div>
        </Dropdown>
        <Dropdown title="Contact">
          <div className={"h-fit w-full md:border-x  px box-content"}>
            {CONSTANTS.contacts.map((contact) => (
              <Link
                className={
                  "h-8 w-full flex justify-center items-center hover:text-xl transition-bg duration-200 z-50 border-y border-secondary-blur-color md:bg-tertiary-color"
                }
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.name}
              </Link>
            ))}
          </div>
          <div className="triangle"></div>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
