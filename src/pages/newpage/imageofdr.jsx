import React from "react";

export default function Page333() {
  return (
    // Outer wrapper: full height + centers everything
    <div className="bg-gray-300 min-h-screen flex justify-center items-center px-4 ">
      {/* Inner wrapper: to limit width and control layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl">
        
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left md:ml-40 ">
          <h1 className="text-[14px] font-bold mb-4 text-[#24426e]">
            Laparoscopy Surgeons
          </h1>
          <p className="text-[32px] mb-3 text-[#000000de]">
            Your Expert in Minimally Invasive Surgery
          </p>
          <p className="text-[16px] text-[#00000099]">
            A team of dedicated laparoscopic surgeons with extensive experience,
            offering advanced, minimally invasive procedures to ensure faster
            recovery and improved patient outcomes.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-wrap md:flex-col gap-6 justify-center md:justify-start md:ml-40">
          
          {/* Doctor 1 */}
          <div className="relative w-[220px] md:w-[300px] h-[180px] md:h-[120px]">
            <img
              src="/Medhavi-Tomar.png.avif"
              alt="Dr. Medhavi"
              className="rounded-full h-24 w-24 absolute top-[-24px] md:top-1/2 left-1/2 md:-left-12 transform -translate-x-1/2 md:-translate-y-1/2 border-2 border-[#24426d] z-10"
            />
            <div className="bg-white rounded-xl px-6 py-6 md:py-4 pl-16 h-full flex flex-col justify-center shadow-md">
              <h1 className="font-semibold text-[20px] text-[#00000099]">Dr. Medhavi Tomar</h1>
              <p className="text-[16px] text-[#00000099]">M.B.B.S., M.S (Gen. Surgery)</p>
              <a href="#" className="flex items-center gap-1 mt-1 text-[#24426d]">
                <span className="hover:underline text-[16px]">View Full Bio</span>
                <span>›</span>
              </a>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="relative w-[220px] md:w-[300px] h-[180px] md:h-[120px]">
            <img
              src="/Monika-Tomar.png.avif"
              alt="Dr. Monika"
              className="rounded-full h-24 w-24 absolute top-[-24px] md:top-1/2 left-1/2 md:-left-12 transform -translate-x-1/2 md:-translate-y-1/2 border-2 border-[#24426d] z-10"
            />
            <div className="bg-white rounded-xl px-6 py-6 md:py-4 pl-16 h-full flex flex-col justify-center shadow-md">
              <h1 className="font-semibold text-[20px] text-[#00000099]">Dr. Monika Tomar</h1>
              <p className="text-[16px] text-[#00000099]">M.B.B.S., M.S (Gen. Surgery)</p>
              <a href="#" className="flex items-center gap-1 mt-1 text-[#24426d]">
                <span className="hover:underline text-[16px]">View Full Bio</span>
                <span>›</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
