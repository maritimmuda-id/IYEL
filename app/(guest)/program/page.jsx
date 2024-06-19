// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Program from "@/components/landing-page/Program/Program";
import Activity from "@/components/landing-page/Activity/Activity";

// ** Import Other
import { contentActivity } from "@/constanst/content-activity";
import Image from "next/image";

const ActivityPage = () => {
  return (
    <main>
      <Banner
        image={"/images/program.jpg"}
        title="PROGRAM"
        buttonTitle="Home"
        to="/"
        className={"w-full h-screen object-cover object-center brightness-50 "}
      />

      <article className="p-8 md:p-20 space-y-20">
        <h1 className="text-center text-3xl md:text-5xl font-bold  py-8">
          Program Kami
        </h1>

        <div className="space-y-20">
          {contentActivity.map((content, index) => (
            <div
              className={`flex justify-center lg:justify-between items-center lg:items-start flex-row flex-wrap lg:flex-nowrap mx-1 lg:mx-24 gap-16 ${
                index % 2 === 1 && "flex-row-reverse"
              } pb-10 lg:pb-20 border-b-0 lg:border-b-4 lg:last:border-b-0 border-black`}
            >
              <Image
                src={content.image}
                alt={content.title}
                className="md:w-7/12 lg:w-auto"
              />

              <div className="space-y-6">
                <h1 className="text-center lg:text-left text-2xl max-w-md md:max-w-full font-bold mx-auto lg:mx-0">
                  {content.title}
                </h1>
                <ul className="list-disc space-y-2 pl-5 mx-6 lg:mx-0">
                  {content.desc.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
};

export default ActivityPage;
