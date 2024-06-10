"use client";

// ** Import React
import React from "react";

// ** Import Other
import { useModalExperience } from "@/zustand/useModalExperience";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { IoMdClose, IoMdSave } from "react-icons/io";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ModalExperienceWork = () => {
  const schema = yup.object({
    position: yup
      .string()
      .min(4, "Minimal 4 Kata")
      .required("Harap Masukan Posisi"),
    institution: yup
      .string()
      .min(4, "Minimal 4 Kata")
      .required("Harap Masukan Lembaga"),
    start_date: yup.string().required("Harap Masukan Tanggal Mulai"),
    end_date: yup.string().required("Harap Masukan Tanggal Berakhir"),
  });

  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const supabase = createClientComponentClient();

  const { setExperience } = useModalExperience();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (input) => {
    setLoading(true);

    const { error } = await supabase
      .from("experience")
      .insert({ ...input })
      .select();

    if (!error) {
      Swal.fire({
        title: "Berhasil",
        icon: "success",
        text: "Data Berhasil Ditambahkan",
      });

      reset();

      setExperience();

      setLoading(false);
    } else {
      Swal.fire({
        title: "Gagal",
        icon: "error",
        text: error.message,
      });

      setLoading(false);
    }

    router.refresh();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen z-20">
      <div className="w-7/12 space-y-5 border-2 py-6 px-6 rounded-xl bg-white">
        <div className="border-b-2 pb-4 flex justify-between">
          <h1 className="text-lg">Tambah Pengalaman Pekerjaan</h1>
          <button className="text-xl" onClick={setExperience}>
            <IoMdClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 py-5">
            <div className="flex flex-col space-y-3">
              <label>
                Posisi{" "}
                {errors.position && (
                  <span className="text-red-600">
                    {`*${errors.position.message}`}
                  </span>
                )}
              </label>

              <input
                name="position"
                {...register("position")}
                type="text"
                className={`border-2 ${
                  errors.position ? "border-red-600" : "border-[#00000053]"
                } bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light `}
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label>
                Lembaga/Perusahaan{" "}
                {errors.institution && (
                  <span className="text-red-600">
                    {`*${errors.institution.message}`}
                  </span>
                )}
              </label>

              <input
                type="text"
                name="institution"
                {...register("institution")}
                className={`border-2 ${
                  errors.institution ? "border-red-600" : "border-[#00000053]"
                } bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light `}
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label>
                Tanggal Mulai{" "}
                {errors.start_date && (
                  <span className="text-red-600">
                    {`*${errors.start_date.message}`}
                  </span>
                )}
              </label>

              <input
                type="date"
                name="start_date"
                {...register("start_date")}
                className={`border-2 ${
                  errors.start_date ? "border-red-600" : "border-[#00000053]"
                } bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light `}
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label>
                Tanggal Berakhir{" "}
                {errors.end_date && (
                  <span className="text-red-600">
                    {`*${errors.end_date.message}`}
                  </span>
                )}
              </label>
              <input
                type="date"
                name="end_date"
                {...register("end_date")}
                className={`border-2 ${
                  errors.end_date ? "border-red-600" : "border-[#00000053]"
                } bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light `}
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex justify-between items-center gap-x-2 border-2 bg-[#21ADEB] text-white p-2 rounded-lg"
          >
            <IoMdSave />
            <p className="text-sm">{loading ? "Loading..." : "Simpan"}</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalExperienceWork;
