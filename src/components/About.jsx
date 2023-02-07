import React from "react";

const About = ({ about }) => {
  return (
    <div className="my-6 w-[100%] flex items-center justify-center">
      <div className="w-[80%] flex justify-center items-center flex-col">
        <div className="mb-[4rem]" ref={about}></div>
        <h3 className="text-[2rem] my-4">聯絡我們</h3>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col flex-[1_1_450px]">
            <h4 className="text-[1.75rem] mb-8">我們樂意為您服務</h4>
            <p className="text-[1.25rem] leading-[3rem] md:pr-8">
              親愛的顧客您好，如有任何需求或疑問需要我們為您服務，請填寫下表，留下您的需求與聯絡方式，我們將盡速主動與您聯絡，謝謝。
            </p>
          </div>
          <div className="flex flex-[1_1_450px]">
            <form action="" className="flex flex-col w-[100%]">
              <label
                htmlFor=""
                className=" text-[1.25rem] after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                姓名
              </label>
              <input
                type="text"
                required
                placeholder="姓名"
                className=" outline-none text-[1rem] border-b-2 border-indigo-600 my-2 p-2  w-[100%]"
              />
              <label
                htmlFor=""
                className="text-[1.25rem] after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                電話
              </label>
              <input
                type="text"
                required
                placeholder="電話"
                className="outline-none text-[1rem] border-b-2 border-indigo-600 my-2 p-2  w-[100%]"
              />
              <label
                htmlFor=""
                className="text-[1.25rem] after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                電子郵件
              </label>
              <input
                type="text"
                required
                placeholder="E-mail"
                className="outline-none text-[1rem] border-b-2 border-indigo-600 my-2 p-2  w-[100%]"
              />
              <label
                htmlFor=""
                className="text-[1.25rem] after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                購物商品名稱
              </label>
              <input
                type="text"
                placeholder="購物商品名稱"
                required
                className=" outline-none text-[1rem] border-b-2 border-indigo-600 my-2 p-2  w-[100%]"
              />
              <label htmlFor="" className="text-[1.25rem]">
                您的建議
              </label>
              <textarea
                placeholder="請寫下您的意見"
                className=" resize-none outline-none border-b-2 border-indigo-600 my-2  w-[100%]"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className=" outline outline-2 hover:bg-[rgb(252,224,14)] p-2 rounded-[12px]"
                >
                  提交
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
