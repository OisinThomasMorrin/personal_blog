//"use client";
import React from "react";
import LinkedIn from "@/components/Header/LinkedIn";
import Github from "@/components/Header/Github";
import XLogo from "@/components/Header/XLogo";
//import { useForm } from "react-hook-form";
import Link from "next/link";
const Footer = () => {
  //const {
  //  register,
  //  handleSubmit,
  //  formState: { errors },
  //} = useForm();
  //const onSubmit = (data) => console.log(data);

  return (
    <footer className="w-full mt-16 bg-slate-400 dark:bg-accentDark/90 px-5 flex flex-row justify-between text-light dark:text-dark">
      {/*}
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Thoughts | Tinkering | Translations
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology, languages and much more.
      </p>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Join the community
        to stay up to date and learn with me.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
    */}
      <span className="text-center">&copy;2023. All rights reserved.</span>
      <div className="text-center">Made through Curiosity</div>
    </footer>
  );
};

export default Footer;
