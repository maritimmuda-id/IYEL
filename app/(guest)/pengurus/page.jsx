// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Pengurus from "@/components/landing-page/Pengurus/Pengurus";

const PengurusPage = () => {
  return (
    <div>
      <Banner
        image={"/images/pengurus2.jpg"}
        title="PENGURUS PUSAT"
        subtitle="Indonesian Youth Economic Leaders"
        className={"w-full h-screen object-cover object-center brightness-50 "}
      />

      <Pengurus />
    </div>
  );
};

export default PengurusPage;
