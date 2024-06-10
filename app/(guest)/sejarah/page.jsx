import Banner from "@/components/landing-page/Banner/Banner";
import Sejarah from "@/components/landing-page/Sejarah/Sejarah";

const SejarahPage = () => {
  return (
    <div>
      <Banner
        image={"/images/sejarah.jpg"}
        title="Sejarah Pendirian"
        subtitle="Indonesian Youth Economic Leaders"
        className={"w-full h-screen object-cover object-center brightness-50 "}
      />

      <Sejarah />
    </div>
  );
};

export default SejarahPage;
