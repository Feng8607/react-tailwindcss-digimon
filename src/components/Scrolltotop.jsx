import React, { useState, useEffect } from "react";

const Scrolltotop = () => {
  const [backtotopButton, SetbacktotopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let heightToHidden = 100;

      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHidden) {
        SetbacktotopButton(true);
      } else {
        SetbacktotopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="scrollup">
      {backtotopButton && (
        <button
          className=" fixed text-white z-10 bottom-[5rem] right-[2rem] p-4 bg-black text-[0.75rem] rounded-[50%] border-none cursor-pointer opacity-[0.5] hover:opacity-[1]"
          onClick={scrollUp}
        >
          top
        </button>
      )}
    </div>
  );
};

export default Scrolltotop;
