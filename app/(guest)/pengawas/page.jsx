// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Pengawas from "@/components/landing-page/Pengawas/Pengawas";

const PenasihatPage = () => {
  return (
    <div>
      <Banner
        image={"/images/pengurus.jpg"}
        title="Dewan Pengawas"
        subtitle="Indonesian Youth Economic Leaders"
      />

      <Pengawas />
    </div>
  );
};

export default PenasihatPage;
