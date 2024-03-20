"use client";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ReactNode, useEffect, useState } from "react";
import { NavAvatar } from "./NavAvatar";
import ThemeToggle from "./ThemeToggle";
import { navData } from "@/lib/navData";
import { Avatar } from "@radix-ui/react-avatar";
import { get } from '@vercel/edge-config';
import { NavDataType } from "./nav.type";

interface Composition{
  children:ReactNode
}




const NavContainer = (props:Composition) => {
  const { children } = props;
  const {isDesktop}=useWindowDimensions()
 const [showNav,toggleNav]=useState(false)
 useEffect(() => {
  toggleNav(isDesktop)
}, [isDesktop])
  return (
    <div className="bg-navBg fixed w-full">
      {!isDesktop && <HamburgerMenuIcon onClick={()=>toggleNav(!showNav)} height={30} width={30} className="ml-auto my-3 mr-3 text-white cursor-pointer" />}
      {showNav && children}
    </div>
  );
};

const NavGroup = (props:Composition) => {
  const { children } = props;
  return (
    <div className=" flex flex-col sm:flex-row sm:justify-between items-center">
      {children}
    </div>
  );
};

const NavRenderer = (props:Composition) => {
  const { children } = props;
  return (
    <div
      className="
        h-screen
        sm:h-[60px]
        flex
        flex-col 
        items-center
        sm:flex-row
        sm:justify-between
        border-b 
        border-base      
        "
    >
      {children}
    </div>
  );
};
const NavLogo = (props:Composition) => {
 const {children}=props
  return (
    <div
      className="
   background-nav
   text-white
   sm:ml-3
  "
    >
      {children}
    </div>
  );
};
const NavItem = (props:Composition) => {
  const { children } = props;
  return (
    <div
      className="
        background-nav
      text-white 
        sm:mr-3 
        rounded
        px-3
        py-1
        "
    >
      {children}
    </div>
  );
};
const Navbar = () => {
  const navItemMap={
    logo:NavLogo,
    item:NavItem,
    avatar:NavAvatar,
    themeToggle:ThemeToggle,
};
const [navbarData,setNavbarData]=useState<NavDataType>([])
useEffect(()=>{
 const fetchConfig=async()=>{
 const response =await fetch('/api/config')
 const {data}= await response.json()
 const navData=data.navData as NavDataType
 setNavbarData(navData)
 
 }
 fetchConfig();
},[])
  return (
    <NavContainer>
    <NavRenderer>
      {navbarData.map((navGroup) => (
        <NavGroup key={navGroup.id}>
          {navGroup.items.map((navItem) => {
            const Item = navItemMap[navItem.type] || (() => <></>);
            return <Item key={navItem.id}>{navItem.content}</Item>;
          })}
        </NavGroup>
      ))}
    </NavRenderer>
  </NavContainer>
  );
};

export { Navbar,NavLogo,NavItem };
