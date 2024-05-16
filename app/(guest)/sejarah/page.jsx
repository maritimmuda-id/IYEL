import Banner from "@/components/landing-page/Banner/Banner";
import Sejarah from "@/components/landing-page/Sejarah/Sejarah";

const SejarahPage = () => {
  return (
    <div>
      <Banner
        image={"/images/sejarah.jpg"}
        title="Sejarah Pendirian"
        subtitle="Indonesian Youth Economic Leaders"
      />

      <Sejarah />
    </div>
  );
};

export default SejarahPage;
