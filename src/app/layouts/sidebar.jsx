import Link from "next/link";

const SideBar = () => {
    return (
        <div className="lg:hidden flex w-full h-fit bg-white absolute">
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
            <div className="grow items-center px-5 py-5 2xl:px-0 text-neutral-800">
                <ul className="grid grid-cols-1 gap-y-5 sm:gap-y-0 sm:grid-cols-4 sm:text-center sm:divide-x font-semibold text-sm">
                    <li><Link href="/services">Dịch vụ thiết kế</Link></li>
                    <li><Link href="/samples">Sản phẩm mẫu</Link></li>
                    <li><Link href="/training">Đào tạo</Link></li>
                    <li><Link href="/contact">Liên hệ</Link></li>
                </ul>
            </div>
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
        </div>
    );
};

export default SideBar;