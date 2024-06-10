// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Lambang from "@/components/landing-page/Lambang/Lambang";

const LambangPage = () => {
  return (
    <div>
      <Banner
        image={"/images/lambang.png"}
        title="Lambang Organisasi"
        subtitle="Asosiasi Geomuda Indonesia"
        className={"w-full h-screen object-cover object-center brightness-50 "}
      />

      <Lambang />
    </div>
  );
};

export default LambangPage;
