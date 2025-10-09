// 'use client';
// import * as React from 'react';
// import Image from 'next/image';

// type Procedure = {
//   desc: string;
//   img: string;
//   title: string;
// };

// export default function Whychooseus() {
//   const procedures: Procedure[] = [
//     {
//       desc: 'Specializing in laparoscopic, endoscopic, and microscopic surgeries, the hospital offers cutting-edge treatments with minimal recovery time and reduced post-operative pain.',
//       img: '/advanced-minimally-invasive-procedures.jpg(1).avif',
//       title: 'Advanced Minimally Invasive Procedures',
//     },
//     {
//       desc: 'The center provides a wide range of surgical specialties, including general surgery, urology, gynecology, and pediatric surgeries, ensuring comprehensive care for various medical needs.',
//       img: '/comprehensive-surgical-services-1024x683.jpg.avif',
//       title: 'Comprehensive Surgical Services',
//     },
//     {
//       desc: 'Equipped with two modern operation theatres and a 22-bed facility, the hospital ensures high standards of patient care and comfort, with accommodations ranging from deluxe rooms to general wards.',
//       img: '/state-of-the-art-facilities-1-1024x683.jpg.avif',
//       title: 'State-of-the-Art Facilities',
//     },
//   ];

//   return (
//     <div className="bg-[#1d3d6d] py-12 space-y-16">
//       <div className="flex justify-center items-start mt-10 text-white">
//         <h1 className="text-[32px] font-semibold">Why Choose Us?</h1>
//       </div>

//       {procedures.map((item, idx) => (
//         <div
//           className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center ${
//             idx === 1 ? 'md:flex-row-reverse' : ''
//           }`}
//           key={idx}
//         >
//           {/* Image Section */}
//           <div className="relative z-10">
//             <Image
//               alt={item.title}
//               className="w-[342px] h-[228px] md:w-[600px] md:h-[400px]"
//               height={400}
//               src={item.img}
//               width={600}
//             />
//           </div>

//           {/* Text Section */}
//           <div
//             className={`bg-white shadow-lg z-20
//               w-[243px] h-[300px] md:w-[45%] md:h-[200px] flex flex-col justify-center
//               ${idx === 0 ? 'pt-4 pb-4 px-4 md:pt-8 md:pb-8 md:px-12' : 'pt-4 pb-4 px-4 md:p-8'}
//               ${idx === 1 ? 'md:-mr-16' : 'md:-ml-16'}`}
//           >
//             <h2 className="text-[28px] md:text-2xl font-bold text-[#1d3d6d] mb-2 md:mb-4">
//               {item.title}
//             </h2>
//             <p className="text-[16px] md:text-lg text-gray-700 leading-snug md:leading-snug">
//               {item.desc}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }