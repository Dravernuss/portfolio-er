import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FormData } from "../types";
import { InfoItem } from "../components/contact/InfoItem";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const { t } = useTranslation();
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
          toast.success(t("contact.submit.success"));
          reset();
        },
        (error) => {
          console.error(error.text);
          toast.error(t("contact.submit.error"));
        }
      );
  };

  return (
    <section className="min-h-screen flex-col justify-center bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-[#1a1a2e] dark:via-[#1f1f3d] dark:to-[#000] text-white px-6 md:px-20 pt-25">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-15">
      {t("contact.getin")}{" "}
        <span className="text-indigo-600 dark:text-indigo-400">{t("contact.touch")}</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="pl-5 pb-5 md:pl-0 md:pb-0 space-y-8 text-indigo-600 dark:text-indigo-400">
          <InfoItem icon="📍" title={t("contact.location")} text={t("contact.locationvalue")} />
          <InfoItem icon="📧" title={t("contact.email")} text={t("contact.emailvalue")} />
          <InfoItem icon="📞" title={t("contact.phone")} text={t("contact.phonevalue")} />
          <InfoItem
            icon="🌐"
            title="LinkedIn"
            text="linkedin.com/in/esteban-rodas-ramos/"
          />
          <InfoItem
            icon="💬"
            title={t("contact.hi")}
            text={t("contact.hivalue")}
          />
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 bg-white mb-2 dark:bg-gray-900 p-8 rounded-md border border-gray-700 shadow-lg backdrop-blur-md"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            {t("contact.form.name")}
            </label>
            <input
              type="text"
              {...register("name", {
                required: t("contact.form.namereq"),
                minLength: { value: 3, message: t("contact.form.namemin") },
              })}
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-black dark:text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            {t("contact.form.email")}
            </label>
            <input
              type="email"
              {...register("email", {
                required: t("contact.form.emailreq"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("contact.form.invalidemail"),
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
            {t("contact.form.phone")}
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: t("contact.form.phonereq"),
                pattern: {
                  value: /^[0-9]{9,}$/,
                  message: t("contact.form.invalidphone"),
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
            {t("contact.form.message")}
            </label>
            <textarea
              {...register("message", {
                required: t("contact.form.messagereq"),
                minLength: {
                  value: 10,
                  message: t("contact.form.messagemin"),
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
