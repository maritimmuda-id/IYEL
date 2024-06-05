// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";

const About = () => {
  return (
    <div className="px-14 py-20 space-y-16 md:space-y-10">
      <h1 className="text-center text-3xl md:text-4xl text-[#21ADEB] mb-10 font-poppins font-bold">
        {/* About Us */}
        TENTANG KAMI
      </h1>
      <div className="py-[1px] bg-black my-4 w-4/6 md:w-2/6 mx-auto"></div>

      <div className="flex flex-col md:flex-row md:px-32 justify-center items-center gap-10 md:gap-20">
        <Image
          src={assets.aboutContent}
          alt="tree"
          className="w-[60%] md:w-[35%] mx-auto"
        />
        <p className="text-center md:text-left md:text-xl font-nunito_sans">
        Indonesian Youth Economic Leaders diinisiasi dan dibentuk oleh para alumni Youth Economic Leadership Program 2023 yang diselenggarakan oleh BI Institute, pada tanggal 9 Juli 2023.
        </p>
      </div>

      <div className="flex flex-col md:flex-row-reverse md:px-32 justify-center items-center gap-10 md:gap-20">
        <Image
          src={assets.aboutContent2}
          alt="tree"
          className="w-[75%] md:w-[60%] mx-auto"
        />
        <p className="text-center md:text-left md:text-xl font-nunito_sans">
        Asosiasi kepemudaan ekonomi ini bersifat mandiri, berwawasan kebangsaan, dan ekonomi berkelanjutan sesuai Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, dan tidak berafiliasi ke partai politik.
        </p>
      </div>
    </div>
  );
};

export default About;
