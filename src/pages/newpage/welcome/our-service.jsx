'use client';
import Image from 'next/image';
import React from 'react';

export default function OurServices() {
  const services = [
    { title: 'Laparoscopic Surgery', color: '#32C0D1' },
    { title: 'Proctology', color: '#1C77C3' },
    { title: 'Laparoscopic Gynae', color: '#1A84B8' },
    { title: 'Endurology', color: '#3C5CCF' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Central Image */}
      <div className="relative flex items-center justify-center">
        <div className="relative">
          <Image
            src="/our-services.png"
            alt="Our Services"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Arrows Around */}
        <svg
          className="absolute inset-0 w-[800px] h-[800px] hidden md:block"
          viewBox="0 0 800 800"
          fill="none"
        >
          {/* Top Left Arrow */}
          <path
            d="M150,300 L80,270 L150,240"
            stroke={services[0].color}
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bottom Left Arrow */}
          <path
            d="M150,500 L80,530 L150,560"
            stroke={services[1].color}
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top Right Arrow */}
          <path
            d="M650,240 L720,270 L650,300"
            stroke={services[2].color}
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bottom Right Arrow */}
          <path
            d="M650,560 L720,530 L650,500"
            stroke={services[3].color}
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text Around the Circle */}
      <div className="absolute top-[22%] left-[15%] text-center text-[#1CA7C3] font-semibold text-lg">
        <p>Laparoscopic</p>
        <p>Surgery</p>
        <a
          href="#"
          className="text-sm text-blue-400 underline hover:text-blue-600"
        >
          Read More
        </a>
      </div>

      <div className="absolute bottom-[22%] left-[15%] text-center text-[#1C77C3] font-semibold text-lg">
        <p>Proctology</p>
        <a
          href="#"
          className="text-sm text-blue-400 underline hover:text-blue-600"
        >
          Read More
        </a>
      </div>

      <div className="absolute top-[22%] right-[15%] text-center text-[#1A84B8] font-semibold text-lg">
        <p>Laparoscopic</p>
        <p>Gynae</p>
        <a
          href="#"
          className="text-sm text-blue-400 underline hover:text-blue-600"
        >
          Read More
        </a>
      </div>

      <div className="absolute bottom-[22%] right-[15%] text-center text-[#3C5CCF] font-semibold text-lg">
        <p>Endurology</p>
        <a
          href="#"
          className="text-sm text-blue-400 underline hover:text-blue-600"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
