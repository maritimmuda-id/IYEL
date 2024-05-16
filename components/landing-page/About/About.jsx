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
          Indonesian Youth Economic Leader dibentuk pada tanggal xx Desember 20xx di Jakarta.
        </p>
      </div>

      {/* <div className="flex flex-col md:flex-row-reverse md:px-32 justify-center items-center gap-10 md:gap-20">
        <Image
          src={assets.aboutContent2}
          alt="tree"
          className="w-[75%] md:w-[60%] mx-auto"
        />
        <p className="text-center md:text-left md:text-xl font-nunito_sans">
          Lorem 111 ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos, inventore quisquam alias minus corrupti ut porro asperiores mollitia iusto officiis, placeat veritatis voluptate. Maxime vero excepturi atque unde voluptates..
        </p>
      </div> */}
    </div>
  );
};

export default About;
