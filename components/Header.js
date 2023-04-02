import React, { useEffect, useRef } from "react";
import {IoIosClose} from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import {gsap} from 'gsap'

function Header() {
  let resMenu = useRef(null);
  let resMenuHeader = useRef(null);
  let resMenuItem1 = useRef(null);
  let resMenuItem2 = useRef(null);
  let resMenuItem3 = useRef(null);
  let resMenuItem4 = useRef(null);
  const menu_open = gsap.timeline({ paused: "true", reversed: "true" });
  useEffect(() => {
    menu_open.to(resMenu.current, {
      y: 0,
      zIndex: 100,
      duration: 0.2,
    });
    menu_open.from(
      [
        resMenuHeader.current,
        resMenuItem1.current,
        resMenuItem2.current,
        resMenuItem3.current,
        resMenuItem4.current,
      ],
      {
        duration: 0.5,
        stagger: {
          amount: 0.4,
        },
        y: -50,
      }
    );
  });
  function menuOpen() {
    menu_open.reversed() ? menu_open.play() : menu_open.reverse();
  }
  return (
    <div>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]"
      >
        <div
          className="flex items-start justify-between w-[100%] h-fit py-[5px]"
          ref={resMenuHeader}
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            Rahul <br />
            Raj Sarma
          </div>
          <div
            onClick={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]"
          >
            <IoIosClose size={30}/>
          </div>
        </div>
        <div className="mx-2 my-10 space-y-1">
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem1}
              className="font-neutralFace font-bold text-[30px]"
            >
              PROJECTS
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem2}
              className="font-neutralFace font-bold text-[30px]"
            >
              ABOUT ME
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem3}
              className="font-neutralFace font-bold text-[30px]"
            >
              BLOGS
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem4}
              className="font-neutralFace font-bold text-[30px]"
            >
              CONTACT
            </div>
          </span>
        </div>
      </div>
      <div className="absolute bg-black top-0 py-[5px] font-neutralFace h-[20vh] flex justify-between w-[100%] flex-col">
        <div
          id="header"
          className="flex items-start justify-between w-[100%] h-fit"
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            Rahul <br /> Raj Sarma
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            PROJECTS
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            ABOUT  ME
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            BLOGS
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            CONTACT
          </div>
          <div
            onClick={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]"
          >
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header