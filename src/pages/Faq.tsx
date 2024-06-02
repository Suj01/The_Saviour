// import React from 'react'
// import faqImg from "../assets/FAQ-image.png"

// const Faq = () => {
//   return (
//     <>
//       <div className='flex bg-black'>
//         <img src={faqImg} alt="" className='w-[503px] h-[503px] ml-[67px] mt-[]'/>
//         <div className='w-[640px]'>
//           <h1 className='text-[#ED0137] text-[44px] font-normal text-center'>FAQ</h1>
//           <div className=''>
//             <ul>
//               <li>
//                 <label htmlFor=""></label>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Faq


import React, { useState } from "react";
import faqImg from "../assets/FAQ-image.png";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    { question: "Why choose 'Savior'?", answer: "Answer to why choose 'Savior'." },
    { question: "Why is the IDO duration so long?", answer: "Answer to why the IDO duration is so long." },
    { question: "When will trading go live?", answer: "Answer to when trading will go live." },
    { question: "When can we claim the tokens?", answer: "After the IDO concludes, you can claim the tokens on our official website." },
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white justify-around">
      <img
        src={faqImg}
        alt="FAQ"
        className="w-[503px]  h-[503px] m-auto ml-[67px] mt-[109px]"
      />
      <div className="flex flex-col items-center lg:w-[640px] p-4 lg:p-0 mr-[188px] mt-[64px]">
        <h1 className="text-[#ED0137] text-[44px] font-normal text-center mb-4">FAQ</h1>
        <div className="w-[640px] mt-[64px]">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-4 border border-[#ED0137] rounded-lg"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-[18px]">{index + 1} {item.question}</h2>
                <span>{open === index ? '▲' : '▼'}</span>
              </div>
              {open === index && (
                <div className="p-4 bg-[#1a1a1a] rounded-b-lg">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
