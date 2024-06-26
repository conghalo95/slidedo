import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex h-[900px] lg:h-[700px] pt-12 border-b bg-white">
      <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
      <div className="grow lg:grid lg:grid-cols-12 px-5 2xl:px-0">
        <div className="text-neutral-800 lg:col-span-5 lg:text-left text-center mt-12">
          <p className="font-semibold text-blue-600">From a team of talented people</p>
          <p className="text-6xl lg:pe-10 font-extrabold my-4">Build your next idea <br className="hidden md:block xl:hidden" /> into reality</p>
          <p className="lg:pe-20 mb-4 text-neutral-600 leading-relaxed">Hãy để bài thuyết trình khô khan trở nên đẳng cấp với dịch vụ thiết kế chuyên nghiệp, nhanh chóng và sáng tạo của SLIDEDO.
            Sự tận tâm của chúng tôi sẽ đảm bảo thông điệp của bạn được truyền đạt một cách hiệu quả và ấn tượng ngoài mong đợi.</p>
          <div className="sm:flex justify-center lg:justify-start 2xl:mt-10">
            <Link href="/pages/contact">
              <button className="flex items-center justify-center w-full sm:w-36 h-9 2xl:h-10 px-5 py-2 me-2 2xl:me-4 rounded-lg font-semibold bg-blue-600">
                <p className="text-sm text-white">Liên hệ ngay</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-3 ms-1 mt-1 stroke-neutral-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </Link>
            <Link href="/pages/services">
              <button className="flex items-center justify-center w-full sm:w-36 h-9 2xl:h-10 mt-4 sm:mt-0 px-5 py-2 rounded-lg text-sm font-semibold border border-neutral-200">
                <p className="text-sm">Xem dịch vụ</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-3 ms-1 mt-1 stroke-neutral-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7">
          <img src="..." className="w-full h-80 sm:h-[500px] lg:h-[650px] my-10 rounded-xl bg-neutral-500" alt="" />
        </div>
      </div>
      <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
    </div>
  );
};

export default HeroSection;