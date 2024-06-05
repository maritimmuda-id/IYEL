// ** Import Components
import About from "@/components/landing-page/About/About";
import Activity from "@/components/landing-page/Activity/Activity";
import Banner from "@/components/landing-page/Banner/Banner";
import Powered from "@/components/landing-page/Powered/Powered";
import Program from "@/components/landing-page/Program/Program";

const LandingPage = () => {
  return (
    <main>
      <Banner
        image={"/images/banner.jpg"}
        title="Indonesian Youth Economic Leaders"
        buttonTitle="Bergabung Dengan Kami"
        to="/login"
      />

      <About />

      <Program />

      <Activity />

      <div className="relative">
        <Powered />
      </div>
    </main>
  );
};

export default LandingPage;
