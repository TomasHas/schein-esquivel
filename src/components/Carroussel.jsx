/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function Carroussel({ data }) {
  const dataMap = data.map((p) => {
    return p.url;
  });
  let [currentIndex, setcurrentIndex] = useState(0);
  // const [currentPic, setCurrentPic] = useState(dataMap[0]);
  let currentPic = dataMap[currentIndex];
  const handleClickLeft = (e) => {
    e.preventDefault();
    if (currentIndex >= 1) setcurrentIndex(currentIndex - 1);
  };
  const handleClickRight = (e) => {
    e.preventDefault();
    console.log("length", dataMap.length);

    if (currentIndex < dataMap.length - 1) setcurrentIndex(currentIndex + 1);
  };
  console.log("currentIndex", currentIndex);
  return (
    <div className="  bg-slate-400   ">
      <div className=" absolute top-20 left-0  bg-yellow-400  ">
        <div className=" carousel  ">
          <div className="absolute top-1/3 flex flex-row justify-between w-full p-2 ">
            <button
              className="rounded-full"
              name="left"
              onClick={handleClickLeft}
            >
              {"<"}
            </button>
            <button
              className="  rounded-full"
              name="right"
              onClick={handleClickRight}
            >
              {">"}
            </button>
          </div>
          <div className=" flex flex-row justify-center">
            <img
              // key={i}
              className=" box-border "
              src={currentPic}
              alt="Not Found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carroussel;

// box sizing:borderbox margin 0 padding 0

// <div className="relative  flex flex-col justify-between items-center">
//         <h1 className=" w-screen bg-pink-50 text-black text-[20px] font-bold p-4 absolute top-2   z-30">
//           Espacios Comunes
//         </h1>
//       </div>{" "}
//       <div className=" w-screen  flex flex-row justify-between items-center p-2 z-30  absolute top-1/3">
//         <button className="  text-black text-[20px] font-bold p-2   bg-white">
//           {"<"}
//         </button>
//         <button className="  text-black text-[20px] font-bold p-2   bg-white">
//           {">"}
//         </button>
//       </div>
//       <div className=" bg-pink-500 z-10 w-screen flex flex-row relative ">
//         {slides.map((img, i) => {
//           {
//             return (
//               <div>
//                 <div className=" w-screen  absolute left-0  ">
//                   <img key={i} src={img.url} alt={`${img}`} />
//                 </div>
//               </div>
//             );
//           }
//         })}
//       </div>
