// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Sambutan from "@/components/landing-page/Sambutan/Sambutan";

const SambutanPage = () => {
  return (
    <div>
      <Banner
        image={"/images/sambutan.jpg"}
        title="SAMBUTAN KETUA UMUM"
        subtitle="Indonesian Youth Economic Leaders"
        className={"w-full h-screen object-cover object-center brightness-50 "}
      />

      <Sambutan />
    </div>
  );
};

export default SambutanPage;
