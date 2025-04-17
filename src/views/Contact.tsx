import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FormData } from "../types";
import { InfoItem } from "../components/contact/InfoItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = () => {
    if (!formRef.current) return;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Mail send successfully!! 🚀");
          reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("An error has occurred. Try again");
        }
      );
  };

  return (
    <section className="min-h-screen flex-col justify-center bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-[#1a1a2e] dark:via-[#1f1f3d] dark:to-[#000] text-white px-6 md:px-20 pt-25">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-15">
        Get in{" "}
        <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="pl-5 pb-5 md:pl-0 md:pb-0 space-y-8 text-indigo-600 dark:text-indigo-400">
          <InfoItem icon="📍" title="Location" text="Lima, Perú" />
          <InfoItem icon="📧" title="Email" text="esteban16.rodas@gmail.com" />
          <InfoItem icon="📞" title="Phone" text="(+51) 945 151 191" />
          <InfoItem
            icon="🌐"
            title="LinkedIn"
            text="linkedin.com/in/esteban-rodas-ramos/"
          />
          <InfoItem
            icon="💬"
            title="Feel free to say hi!"
            text="I'd love to hear from you."
          />
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 bg-white mb-2 dark:bg-gray-900 p-8 rounded-md border border-gray-700 shadow-lg backdrop-blur-md"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
              Your Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-black dark:text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
              Your Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-black dark:text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
              Your Phone
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{9,}$/,
                  message: "Enter at least 9 digits, numbers only",
                },
              })}
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-black dark:text-white"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
              Message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters",
                },
              })}
              name="message"
              rows={4}
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-black dark:text-white"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded shadow hover:opacity-90 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        theme="colored"
      />
    </section>
  );
}
