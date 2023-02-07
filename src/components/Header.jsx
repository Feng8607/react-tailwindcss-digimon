import React from "react";

const Header = ({ home }) => {
  return (
    <div className="w-[100%]">
      <div ref={home} className="w-[90%] m-auto h-[90vh] max-md:h-[80vh]">
        <div className="flex w-[100%] h-[100%] bg-cover bg-no-repeat bg-fixed bg-center bg-1 bg-[url('../image/BG1.jpg')]">
          <div className="w-[100%]">
            <div className=" h-[100%]  mt-[20rem] z-[5] max-md:mt-[15rem] ">
              <div className="absolute flex opacity-[0.95] bg-yellow-300  left-[0rem] z-[6] h-[20%] w-[50%] rounded-r-[12px] max-md:bg-transparent"></div>
              <div className="absolute z-[7]  text-center max-md:static max-md:flex max-md:justify-center max-md:items-center  ">
                <div className=" text-[1.75rem] font-bold max-md:p-6 max-md:flex max-md:flex-col  max-md:bg-yellow-300  max-md:rounded-[12px]">
                  數碼寶貝
                  <br />
                  <span className="text-[1.25rem] ">主題介紹與活動</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
};

export default Header;
