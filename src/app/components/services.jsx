"use client"
import Link from "next/link";
import serviceData from "../../../public/data/servicesUI";
import { useState } from "react";

const Services = () => {


    const [currentService, setCurrentService] = useState("0");
    
    const slideHandle = () => {

    }

    return (
        <div className="flex h-fit border-t bg-white text-neutral-600">
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
            <div className="grow px-5 2xl:px-0 my-20">
                <div className="w-full sm:w-[80%] mx-auto lg:mx-0 lg:w-[500px] text-center lg:text-left">
                    <p className="font-semibold text-blue-600 tracking-tight">Dịch vụ của chúng tôi</p>
                    <p className="font-bold text-4xl tracking-tight text-neutral-800 my-4">Fast, convenient and easy to tailor to your content</p>
                    <p className="leading-relaxed">Sản phẩm đảm bảo phù hợp với các yêu cầu đặc trưng đến từ khách hàng, đảm bảo trải nghiệm tốt nhất khi đến sử dụng.</p>
                    <Link href="/services">
                        <div className="flex items-center w-fit h-fit mt-5 text-sm font-semibold mx-auto lg:mx-0">
                            <p className="text-sm text-blue-600">Xem thêm dịch vụ</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-3 ms-1 mt-1 stroke-neutral-200">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className="border-t mt-20 lg:hidden sm:grid sm:grid-cols-2 sm:gap-5">
                    {serviceData.map((serviceItem, serviceIndex) => {
                        return (
                            <div key={serviceIndex} className="mt-10 text-center">
                                <p className="w-fit h-fit px-3 py-1 rounded-full font-semibold bg-blue-600 text-white text-xs mx-auto lg:mx-0">{serviceItem.badge}</p>
                                <p className="font-bold text-neutral-800 mt-2 mb-5 tracking-tight">{serviceItem.title}</p>
                                <p className="leading-relaxed text-pretty">{serviceItem.content}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="hidden border-t mt-20 lg:flex lg:gap-x-10">
                    {serviceData.map((serviceItem, serviceIndex) => {
                        return (
                            <button key={serviceIndex} id={serviceItem.id} onClick={e => setCurrentService(e.target.id)}
                                disabled={currentService === `${serviceItem.id}`}
                                className="group text-center w-full h-72 lg:text-left border-t -mt-[1px] disabled:border-t-pink-600 space-y-4 pt-20">
                                <p className="w-fit h-6 px-3 py-1 rounded-full font-semibold bg-neutral-100 text-neutral-500 group-disabled:bg-blue-600 group-disabled:text-white text-xs mx-auto lg:mx-0">{serviceItem.badge}</p>
                                <p className="h-6 font-bold text-neutral-800 tracking-tight">{serviceItem.title}</p>
                                <p className="h-32 leading-relaxed text-pretty">{serviceItem.content}</p>
                            </button>
                        )
                    })}
                </div>
                <div className="hidden lg:flex mt-16 w-full overflow-hidden h-[700px]">
                    {serviceData.map((serviceItem, serviceIndex) => {
                        return (
                            <div key={serviceIndex}>
                                {currentService === `${serviceItem.id}` && <img src={serviceItem.img} className="w-full h-full flex-none rounded-3xl bg-neutral-400 object-cover" alt="" />}
                            </div>
                            
                            // <div className="flex-none w-full" key={serviceIndex}>
                            //      <img src={serviceItem.img} className={currentService === `${serviceItem.id}` ? "translateX(currentService)" : ""} alt="" />
                            // </div>
                            // Đoạn này để làm carousel slide nhưng ko biết syntax đoạn translateX(currentService), đoạn trên là sai, nếu dùng chỗ đó css trong tailwind thì nó sẽ
                            // di chuyển khoảng không ở giữa, cần phải biết câu lệnh để viết được translateX vào chỗ đó
                        )
                    })}
                </div>
            </div>
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
        </div>
    );
};

export default Services;