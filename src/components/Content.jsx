import React from "react";
import pic from "../image/1.jpg";
import pic2 from "../image/2.jpg";
import pic3 from "../image/3.jpg";
const Content = ({ content }) => {
  return (
    <div className=" flex flex-col items-center ">
      <div className="mb-[4rem]" ref={content}></div>
      <h2 className="text-[2rem]">數碼訂閱</h2>
      <h4 className="text-[1.5rem] my-4 text-center">
        訂閱數碼寶貝，即可得到許多資訊
      </h4>
      <div className="flex justify-center align-middle flex-wrap w-[100%]">
        <div className="flex flex-shrink flex-wrap justify-around w-[80%]">
          <div className="shadow-[5px_10px_20px_gray] p-[1rem] m-[1rem] flex flex-col items-center text-center my-3 basis-[250px]">
            <h3 className="text-[1.5rem]">個人使用者</h3>
            <h4>$139</h4>
            <div>
              <p className="py-2 px-5 border-b-[2px] border-gray-900">500GB</p>
              <p className="py-2 px-5 border-b-[2px] border-gray-900">單人</p>
              <p className="py-2 px-5 border-b-[2px] border-gray-900">
                300種數碼獸
              </p>
            </div>
            <div className=" overflow-hidden w-30 h-30 rounded-[50%]  my-5">
              <img
                src={pic}
                alt=""
                className="h-30 w-30 rounded-[50%] hover:scale-[1.2]"
              />
            </div>
          </div>
          <div className="shadow-[5px_10px_20px_gray] p-[1rem] m-[1rem] flex flex-col items-center text-center my-3 basis-[250px]">
            <h3 className="text-[1.5rem]">團體使用者</h3>
            <h4>$499</h4>
            <div>
              <p className="py-2 px-5 border-b-[2px] border-gray-900">500GB</p>
              <p className="py-2 px-5 border-b-[2px] border-gray-900">
                4位使用者
              </p>
              <p className="py-2 px-5 border-b-[2px] border-gray-900">
                500種數碼獸
              </p>
            </div>
            <div className=" overflow-hidden w-30 h-30 rounded-[50%] my-5">
              <img
                src={pic2}
                alt=""
                className="h-30 w-30 rounded-[50%] hover:scale-[1.2]"
              />
            </div>
          </div>
          <div className="shadow-[5px_10px_20px_gray] px-[1.25rem] py-[1rem] m-[1rem] flex flex-col items-center text-center my-3 basis-[250px]">
            <h3 className="text-[1.5rem]">公司</h3>
            <h4>$800</h4>
            <div>
              <p className="py-2 px-5 border-b-[2px] border-gray-900">500GB</p>
              <p className="py-2 px-5 border-b-[2px] border-gray-900">
                公司行號
              </p>
              <p className="py-2 px-5 border-b-[2px] border-gray-900">
                750種數碼獸
              </p>
            </div>
            <div className=" overflow-hidden w-30 h-30 rounded-[50%] my-5">
              <img
                src={pic3}
                alt=""
                className="h-30 w-30 rounded-[50%]  hover:scale-[1.2]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
