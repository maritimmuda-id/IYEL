import { activities } from "@/constanst/activity";

import Image from "next/image";

const Activity = () => {
  return (
    <div className="bg-white py-20 px-10 text-gray-900 space-y-16 ">
      <h1 className="text-center text-3xl md:text-4xl font-semibold">
        {/* Our Program */}
        Aktivitas Kami
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10 justify-items-center ">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="w-2/3 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 "
          >
            <Image className="rounded-lg" src={activity.image} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl  text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                {activity.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Activity;
