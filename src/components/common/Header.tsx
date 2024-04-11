import { useState, ReactElement } from "react";
import Link from "next/link";

import { HiLocationMarker } from "react-icons/hi";
import { GiEuropeanFlag } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";

import { DropdownProps } from "@/models";

import CONSTANTS from "../../../constants/header-info.json";
import LogoHeader from "./LogoHeader";

const Dropdown: React.FC<DropdownProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        "h-full w-56 text-white flex flex-row justify-center items-center relative hover:bg-tertiary-color hover:cursor-pointer duration-200 triangle-bottom triangle-bottom box-border hover:border-x"
      }
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className={"mr-4 box-border"}>{title}</span>
      <span>{icon}</span>
      {isOpen && (
        <div
          className={
            "h-fit w-full flex flex-col justify-center items-center absolute top-14"
          }
        >
          {children}
        </div>
      )}
    </div>
  );
};

function Header(): ReactElement {
  return (
    <header
      className={
        "fixed top-0 left-0 w-full h-14 px-h-24 shadow-md z-50 flex flex-row justify-start items-center px-7 bg-primary-color"
      }
    >
      <LogoHeader page={"/"} />
      <div
        className={
          "h-full w-96 flex flex-row justify-between items-center mx-8"
        }
      >
        <Dropdown title="Offices" icon={<HiLocationMarker />}>
          <div className={"h-fit w-full border-x  px box-content"}>
            {CONSTANTS.offices.map((office) => (
              <Link
                className={
                  "h-8 w-full flex justify-center items-center  bg-tertiary-color hover:text-xl transition-bg duration-200 z-50"
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
        <Dropdown title="EU Projects" icon={<GiEuropeanFlag />}>
          <div className={"h-fit w-full border-x  px box-content"}>
            <Link
              className={
                "h-8 w-full flex justify-center items-center bg-tertiary-color hover:text-xl transition-bg duration-200 z-50"
              }
              href="/eu-projects"
            >
              All Projects
            </Link>
          </div>
          <div className="triangle"></div>
        </Dropdown>
        <Dropdown title="Contact" icon={<IoMdContact />}>
          <div className={"h-fit w-full border-x  px box-content"}>
            {CONSTANTS.contacts.map((contact) => (
              <Link
                className={
                  "h-8 w-full flex justify-center items-center  bg-tertiary-color hover:text-xl transition-bg duration-200 z-50"
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
