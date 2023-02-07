import React from "react";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center my-[2rem]">
      <div className="mb-[4rem]" ref={product}></div>
      <h3 className="text-[2rem]">主題介紹</h3>
      <div className="flex justify-around items-center flex-wrap w-[80%]">
        <div>
          <h3 className="text-[1.75rem]">數碼寶貝介紹</h3>
          <div className="flex-2 basis-[350px]">
            數碼怪獸（Digital
            Monster，デジタルモンスター）通稱數碼獸（Digimon，デジモン）。數碼獸在被稱為「數碼世界」的計算機網路上的模擬網路空間（Cyberspace）中生息，他們是一種擁有人工智慧的數據生命體（Data
            Organism）。其分為各種各樣的屬性和等級，模擬存在於現實世界的動植物、機械、人型和突然變異等，呈現出多種多樣的種族。
          </div>
        </div>
        <div className="my-4 w-[100%]">
          <h3 className="text-[1.5rem] text-[rgb(241,173,0)]">
            6大數碼世界介紹
          </h3>
          <div className="flex flex-wrap justify-around w-[100%]">
            <div className=" flex-[1_1_250px] bg-gray-300 p-4 m-4 rounded-[12px] cursor-pointer hover:bg-[rgb(255,200,0)]">
              <p className=" font-bold text-[1.25rem]">數碼獸</p>
              <ul className=" list-disc p-4">
                <li>數碼蛋</li>
                <li>數碼核</li>
                <li>X抗體</li>
                <li>古代種</li>
                <li>ARMS</li>
              </ul>
            </div>
            <div className="flex-[1_1_250px]  bg-gray-300 p-4 m-4 rounded-[12px] cursor-pointer hover:bg-[rgb(255,200,0)]">
              <p className=" font-bold text-[1.25rem]">進化</p>
              <ul className=" list-disc p-4">
                <li>合步進化</li>
                <li>裝甲進化</li>
                <li>黑暗進化</li>
                <li>魂進化</li>
                <li>特殊變異</li>
                <li>X進化</li>
                <li>生化進化</li>
              </ul>
            </div>
            <div className="flex-[1_1_250px]  bg-gray-300 p-4 m-4 rounded-[12px] cursor-pointer hover:bg-[rgb(255,200,0)]">
              <p className=" font-bold text-[1.25rem]">階段</p>
              <ul className=" list-disc p-4">
                <li>幼年期</li>
                <li>成長期</li>
                <li>成熟期</li>
                <li>完全體</li>
                <li>究極體</li>
              </ul>
            </div>
            <div className="flex-[1_1_250px]  bg-gray-300 p-4 m-4 rounded-[12px] cursor-pointer hover:bg-[rgb(255,200,0)]">
              <p className=" font-bold text-[1.25rem]">生態</p>
              <ul className=" list-disc p-4">
                <li>屬性</li>
                <li>DNA</li>
                <li>種族</li>
                <li>所屬</li>
                <li>合金</li>
                <li>領域</li>
              </ul>
            </div>
            <div className="flex-[1_1_250px]  bg-gray-300 p-4 m-4 rounded-[12px] cursor-pointer hover:bg-[rgb(255,200,0)]">
              <p className=" font-bold text-[1.25rem]">數碼世界</p>
              <ul className=" list-disc p-4">
                <li>舊數碼世界</li>
                <li>新數碼世界</li>
                <li>異世界</li>
              </ul>
            </div>
            <div className="flex-[1_1_250px]  bg-gray-300 p-4 m-4 rounded-[12px] cursor-pointer hover:bg-[rgb(255,200,0)]">
              <p className=" font-bold text-[1.25rem]">組織.勢力</p>
              <ul className=" list-disc p-4">
                <li>皇家騎士團</li>
                <li>奧林匹斯十二神族</li>
                <li>七大魔王</li>
                <li>三大天使</li>
                <li>四聖獸.十二神將</li>
                <li>十鬥士</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
