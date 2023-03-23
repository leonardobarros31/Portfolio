import React from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({ }: Props) {
  const { register, handleSubmit, } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contato
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Gostou do que viu?{""}
          <span className="underline decoration-[#537FE7]/50">Vamos conversar.</span>
        </h4>

        {/* Infos */}
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#537FE7] animate-pulse" />
            <p className="text-2xl">leonardobarros9931@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#537FE7] animate-pulse" />
            <p className="text-2xl">Rio de Janeiro, RJ</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ContactMe;
