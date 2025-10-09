    import React from "react";

    export default function Page333() {
    return (
        <div className="bg-gray-300 md:flex md:items-center md:justify-between md:p-20 p-15">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center md:pr-10">
            <h1 className="sm:text-[16px] md:text-[16px] font-bold mb-4 text-[#24426e]">
            Laparoscopy Surgeons
            </h1>
            <p className="sm:text-[32px] md:text-[32px] mb-3 text-[#000000de]">
            Your Expert in Minimally Invasive Surgery
            </p>
            <p className="sm:text-[16px] md:text-[16px] text-[#00000099]">
            A team of dedicated laparoscopic surgeons with extensive experience,
            offering advanced, minimally invasive procedures to ensure faster
            recovery and improved patient outcomes.
            </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col md:flex-col gap-6 justify-center md:justify-center pt-5 md:pt-0">
            {/* Doctor 1 */}
            <div className="relative w-[300px] h-[120px] md:w-[500px] md:h-[180px] ">
            <img
                src="/Medhavi-Tomar.png.avif"
                alt="Dr. Medhavi"
                className="rounded-full h-30 w-30 absolute -left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#24426d] z-10"
            />
            <div className="bg-white rounded-xl px-6 py-4 md:pl-26 pl-16 h-full flex flex-col justify-center shadow-md">
                <h1 className="font-semibold text-[20px] text-[#00000099] md:pb-3">Dr. Medhavi Tomar</h1>
                <p className="text-[16px] text-[#00000099] md:pb-5">M.B.B.S., M.S (Gen. Surgery)</p>
                <a href="/newpage/page111" className="flex items-center gap-1 mt-1 text-[#24426d]">
                <span className="hover:underline text-[16px] font-semibold">View full bio</span>
                <span>›</span>
                </a>
            </div>
            </div>

            {/* Doctor 2 */}
            <div className="relative md:w-[500px] md:h-[180px]  w-[300px] h-[120px]">
            <img
                src="/Monika-Tomar.png.avif"
                alt="Dr. Monika"
                className="rounded-full h-30 w-30 absolute -left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#24426d] z-10"
            />
            <div className="bg-white rounded-xl px-6 py-4 pl-16 md:pl-26 h-full flex flex-col justify-center shadow-md">
                <h1 className="font-semibold text-[20px] text-[#00000099] md:pb-3">Dr. Monika Tomar</h1>
                <p className="text-[16px] text-[#00000099] md:pb-5">M.B.B.S., M.S (Gen. Surgery)</p>
                <a href="#" className="flex items-center gap-1 mt-1 text-[#24426d]">
                <span className="hover:underline text-[16px] font-semibold">View Full Bio</span>
                <span>›</span>
                </a>
            </div>
            </div>
        </div>
        </div>
    );
    }
