import assets from "@/assets/assets";
import { sambutan } from "@/constanst/sambutan";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Sambutan = () => {
  return (
    <div className="px-10 md:px-16 py-36">
      <div className="flex gap-x-20 justify-center flex-col-reverse lg:flex-row">
        <div className="basis-2/5">
          <Image
            src={assets.kaisarImage}
            className="w-[36em] mx-auto lg:mx-0"
            alt="khalif al faiz remove background"
            priority
          />
          {/* <div className="bg-[#7B2418] rounded-3xl md:rounded-full py-3">
            <h2 className="text-white text-lg md:text-xl text-center uppercase">
              Kaisar Akhir
            </h2>
          </div> */}
        </div>

        <div className="flex flex-col space-y-6 basis-2/5">
          {/* <div> */}
            {/* tanda kutip */}
            {/* <FaQuoteLeft className="text-4xl text-[#7B2418]" /> */}
          {/* </div> */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold  text-center lg:text-left">
              SAMBUTAN KETUA UMUM IYEL
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold text-center lg:text-left uppercase text-orange-700">
              Kaisar Akhir
            </h2>
            
            <div className="space-y-3">
              {sambutan.map((description, index) => (
                <p className="leading-7" key={index}>
                  {description.text}
                </p>
              ))}
    
            </div>
          </div>
          {/* <div className="flex justify-end"> */}
            {/* tanda kutip */}
            {/* <FaQuoteRight className="text-4xl text-[#7B2418]" /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sambutan;
