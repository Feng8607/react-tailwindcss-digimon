import React, { useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import Logo from "../image/DIGITAL.png";
const Head = ({ about, product, content, home }) => {
  const [show, setShow] = useState(true);
  const Navhandler = () => {
    setShow(!show);
  };
  const homeClick = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };
  const aboutClick = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };
  const productClick = () => {
    product.current?.scrollIntoView({ behavior: "smooth" });
  };
  const contentClick = () => {
    content.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="items-center w-full fixed bg-slate-500 z-20">
      <div className="flex  py-4 md:px-10 px-7 justify-between items-center">
        <div className="flex items-center cursor-pointer text-2xl font-bold  text-white">
          <img src={Logo} alt="" className="w-[2rem] h-[2rem] mr-4" />
          <h1>數碼寶貝</h1>
        </div>
        <ul className="md:flex md:item-center max-md:hidden">
          <li
            onClick={homeClick}
            className="ml-8 cursor-pointer relative text-white text-[1.25rem] before:content-[''] before:w-[0] before:z-[-1] before:bg-[rgb(255,233,38)] before:h-[2px] before:bottom-0 before:absolute hover:before:w-[100%] hover:before:h-[2px] before:transition-[2s_ease-in-out_2s]"
          >
            首頁
          </li>
          <li
            onClick={productClick}
            className="ml-8 cursor-pointer  text-white text-[1.25rem] relative before:content-[''] before:w-[0] before:z-[-1] before:bg-[rgb(255,233,38)] before:h-[2px] before:bottom-0 before:absolute hover:before:w-[100%] hover:before:h-[2px] before:transition-[2s_ease-in-out_2s]"
          >
            數碼世界介紹
          </li>
          <li
            onClick={contentClick}
            className="ml-8 cursor-pointer  text-white text-[1.25rem] relative before:content-[''] before:w-[0] before:z-[-1] before:bg-[rgb(255,233,38)] before:h-[2px] before:bottom-0 before:absolute hover:before:w-[100%] hover:before:h-[2px] before:transition-[2s_ease-in-out_2s]"
          >
            數碼訂閱
          </li>
          <li
            onClick={aboutClick}
            className="ml-8 cursor-pointer  text-white text-[1.25rem] relative before:content-[''] before:w-[0] before:z-[-1] before:bg-[rgb(255,233,38)] before:h-[2px] before:bottom-0 before:absolute hover:before:w-[100%] hover:before:h-[2px] before:transition-[2s_ease-in-out_2s]"
          >
            聯絡我們
          </li>
        </ul>

        <div
          onClick={Navhandler}
          className="z-10 md:hidden transition-all duration-[1500] ease-in md:pr-4"
        >
          {!show ? (
            <AiOutlineClose size={25}></AiOutlineClose>
          ) : (
            <AiOutlineAlignRight size={25}></AiOutlineAlignRight>
          )}
        </div>
        <div
          className={` opacity-[0.9] md:hidden transition-all duration-500 ease-in fixed top-[4rem] right-0  bg-slate-500 text-white w-[60%] border-r h-full border-r-gray-900 ${
            !show ? "right-0" : "right-[-100vw]"
          }`}
        >
          <ul className=" px-4">
            <li
              onClick={homeClick}
              className=" font-bold p-4 border-b border-gray-200 cursor-pointer"
            >
              首頁
            </li>
            <li
              onClick={productClick}
              className=" font-bold p-4 border-b border-gray-200 cursor-pointer"
            >
              數碼世界介紹
            </li>
            <li
              onClick={contentClick}
              className="font-bold p-4 border-b border-gray-200 cursor-pointer"
            >
              數碼訂閱
            </li>
            <li
              onClick={aboutClick}
              className="font-bold p-4 border-b border-gray-200 cursor-pointer"
            >
              聯絡我們
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Head;
