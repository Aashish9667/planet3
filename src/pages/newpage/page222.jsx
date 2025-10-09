// app/page.js or pages/index.js
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Gemini_Generated_Image_rctj8xrctj8xrctj.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20">
        {/* Left Text */}
        <div className="text-center md:text-left md:max-w-lg">
            <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Redefining Surgical Excellence with Advanced Laparoscopic Solutions
          </h1></div>

          <div><p className="text-gray-800 font-semibold text-lg md:text-[22px] ">
            <span className="bg-gray-900 text-white px-2 py-1 rounded-r-2xl -mb-2">
              Dr. Medhavi and Dr. Monika Tomar
            </span>
            <br />
            <span className="text-black bg-white font-normal text-base md:text-[16px] rounded-br-2xl px-2 py-1  ">
              Laparoscopic Surgeons
            </span>
          </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:ml-10 w-64 h-64 md:w-80 md:h-80 relative">
          <Image
            src="/Medhavi-and-monika-Tomar-photo-for-website.png.avif"
            alt="Doctors"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
