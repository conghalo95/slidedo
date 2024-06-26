import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex h-fit bg-white">
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
            <div className="grow grid grid-cols-1 lg:grid-cols-12 lg:my-5 px-5 py-5 2xl:px-0 text-neutral-800">
                <div className="lg:col-span-5 space-y-2 my-5 text-center lg:text-left">
                    <Link href="/"><img src="/slidedo-logo.webp" className="w-60 mx-auto lg:mx-0" alt="" /></Link>
                    <p className="font-semibold text-wrap lg:text-lg">CÔNG TY TNHH SÁNG TẠO HÌNH ẢNH <br className="hidden lg:block" /> VISBOX (THƯƠNG HIỆU SLIDEDO)</p>
                    <p>Email: info@slidedo.net</p>
                    <p>Hotline: +84 37 4947672 (Ms. Mai)</p>
                    <p>Hotline: +84 97 1029110 (Ms. Linh)</p>
                </div>
                <div className="lg:col-span-7">
                    <p className="text-center font-semibold border-t lg:hidden py-4">Gửi thông tin cho chúng tôi</p>
                    <form action="" className="space-y-2 text-sm">
                        <input type="text" placeholder="Name" className="w-full h-10 border rounded-md px-4" />
                        <input type="text" placeholder="Phone" className="w-full h-10 border rounded-md px-4" />
                        <input type="text" placeholder="Email" className="w-full h-10 border rounded-md px-4" />
                        <input type="text" placeholder="Yêu cầu dịch vụ" className="w-full h-10 border rounded-md px-4" />
                        <input type="text" placeholder="Yêu cầu thêm" className="w-full h-40 border rounded-md px-4" />
                    </form>
                    <button className="w-full h-10 rounded-md mt-2 px-4 bg-blue-600 text-white">Gửi thông tin</button>
                </div>
            </div>
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
        </div>
    );
};

export default Footer;