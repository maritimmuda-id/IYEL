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
      />

      <Pengurus />
    </div>
  );
};

export default PengurusPage;
