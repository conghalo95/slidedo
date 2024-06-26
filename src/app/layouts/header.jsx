"use client"
import Link from "next/link";
import SideBarButton from "../UI/sidebar-button";
import SideBar from "./sidebar";
import { useState } from "react";

const Header = () => {
    const [dropMenu, setDropMenu] = useState(false);
    return (
        <div>
            <div className="flex h-20 bg-white">
                <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
                <div className="grow flex items-center px-5 py-5 2xl:px-0 text-neutral-800">
                    <div>
                        <Link href="/"><img src="/slidedo-logo.webp" className="w-36" alt="" /></Link>
                    </div>
                    <Link href="/pages/samples">
                        <button className="hidden sm:flex ms-5 w-60 h-fit py-1 border rounded-full items-center justify-center text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 fill-blue-500">
                                <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                            </svg>
                            <p className="mx-1 font-semibold">Xem bản sample mới ở đây</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-3 stroke-neutral-200">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </Link>
                    <div className="grow"></div>
                    <SideBarButton dropMenu={dropMenu} setDropMenu={setDropMenu} />
                    <ul className="hidden lg:flex gap-x-5 text-sm font-semibold">
                        <li><Link href="/pages/services">Dịch vụ thiết kế</Link></li>
                        <li><Link href="/pages/samples">Sản phẩm mẫu</Link></li>
                        <li><Link href="/pages/training">Đào tạo</Link></li>
                        <li><Link href="/pages/contact">Liên hệ</Link></li>
                        <li className="border-s ps-5">+84 97 1029110</li>
                    </ul>
                </div>
                <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
            </div>
            {dropMenu && <SideBar />}
        </div>
    );
};

export default Header;