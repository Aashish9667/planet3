'use client';
import * as React from 'react';
import Image from 'next/image';

export default function Laparoscopysurgeons() {
  return (
    <div className="bg-gray-300 md:flex md:items-center md:justify-between md:px-20 px-4 py-10">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center md:pr-10">
        <h1 className="sm:text-[14px] md:text-[14px] font-bold mb-4 text-[#24426e]">
          Laparoscopy Surgeons
        </h1>
        <p className="sm:text-[32px] md:text-[32px] mb-3 text-[#000000de]">
          Your Expert in Minimally Invasive Surgery
        </p>
        <p className="sm:text-[16px] md:text-[16px] text-[#00000099]">
          A team of dedicated laparoscopic surgeons with extensive experience, offering advanced,
          minimally invasive procedures to ensure faster recovery and improved patient outcomes.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex flex-wrap md:flex-col gap-6 justify-center md:justify-start">
        {/* Doctor 1 */}
        <div className="relative w-[300px] h-[120px]">
          <Image
            alt="Dr. Medhavi"
            className="rounded-full h-24 w-24 absolute -left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#24426d] z-10"
            src="/Medhavi-Tomar.png.avif"
            height={96}
            width={96}
          />
          <div className="bg-white rounded-xl px-6 py-4 pl-16 h-full flex flex-col justify-center shadow-md">
            <h1 className="font-semibold text-[20px] text-[#00000099]">Dr. Medhavi Tomar</h1>
            <p className="text-[16px] text-[#00000099]">M.B.B.S., M.S (Gen. Surgery)</p>
            <a
              className="flex items-center gap-1 mt-1 text-[#24426d]"
              href="/components/frontend/dr-boi-medhavi"
            >
              <span className="hover:underline text-[16px]">View Full Bio</span>
              <span>›</span>
            </a>
          </div>
        </div>

        {/* Doctor 2 */}
        <div className="relative w-[300px] h-[120px]">
          <Image
            alt="Dr. Monika"
            className="rounded-full h-24 w-24 absolute -left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#24426d] z-10"
            src="/Monika-Tomar.png.avif"
             width={96}
             height={96}
          />
          <div className="bg-white rounded-xl px-6 py-4 pl-16 h-full flex flex-col justify-center shadow-md">
            <h1 className="font-semibold text-[20px] text-[#00000099]">Dr. Monika Tomar</h1>
            <p className="text-[16px] text-[#00000099]">M.B.B.S., M.S (Gen. Surgery)</p>
            <a
              className="flex items-center gap-1 mt-1 text-[#24426d]"
              href="/components/frontend/dr-boi-monika"
            >
              <span className="hover:underline text-[16px]">View Full Bio</span>
              <span>›</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
