import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt=""
          className="w-full md:w-2/4 object-contain"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg text-gray-600">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Hospital Management, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Hospital Management, we
              understand the complexities of modern healthcare and strive to provide
              innovative solutions that simplify your experience.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Hospital Management is committed to excellence in healthcare technology. We
              believe in empowering individuals to take control of their health by
              providing intuitive tools and reliable information. Whether you're
              scheduling appointments, accessing medical records, or seeking
              ongoing care, Hospital Management is here to support you every step of the
              way.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our vision at Hospital Management is to create a seamless healthcare
              ecosystem where patients and providers can connect effortlessly. We are
              constantly evolving our platform to incorporate the latest advancements
              in technology and healthcare practices, ensuring you receive the best
              possible care.
            </p>
          </div>
          <p>
            Hospital Management is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Hospital Management is here to support you every step of the
            way.
          </p>
          <strong className="text-gray-800">Our Vision</strong>
          <p>
            Our vision at Hospital Management is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4 text-gray-400">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="hover:text-white hover:bg-primary border px-10 md:px16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] transition-all duration-300 text-gray-600 cursor-pointer">
          <strong>EFFICIENCY:</strong>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="hover:text-white hover:bg-primary border px-10 md:px16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] transition-all duration-300 text-gray-600 cursor-pointer">
          <strong>CONVENIENCE:</strong>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="hover:text-white hover:bg-primary border px-10 md:px16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] transition-all duration-300 text-gray-600 cursor-pointer">
          <strong>PERSONALIZATION:</strong>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
