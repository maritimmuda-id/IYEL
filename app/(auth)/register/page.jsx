// ** Import Components
import FormRegister from "@/components/auth/form/FormRegister";

// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="lg:basis-8/12 w-full px-10 lg:p-0">
      <div className="p-6 md:p-10 max-w-2xl shadow-2xl rounded-xl bg-slate-50 mx-auto">
        <Image
          src={assets.logoIyel}
          className="w-40 mx-auto"
          alt="logo iyel"
        />
        <h2 className="text-xl text-center my-5 font-semibold py-4">Register</h2>

        <FormRegister />

        <div className="text-center my-4">
          <p className="text-sm">
            Back to{" "}
            <span className="font-semibold">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
