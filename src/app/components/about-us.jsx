const AboutUs = () => {
    return (
        <div className="flex h-fit pt-12 bg-white text-neutral-600">
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
            <div className="grow px-5 2xl:px-0 my-20">
                <div className="text-pretty sm:grid sm:grid-cols-12">
                    <p className="font-semibold text-2xl tracking-tight text-neutral-800 mb-5 sm:col-span-5">The story of us</p>
                    <div className="sm:col-span-7 lg:pe-28 2xl:pe-40 leading-relaxed space-y-5 mb-10">
                        <p>SLIDEDO là thương hiệu non trẻ, mới thành lập trong lĩnh vực Thiết kế Slide PowerPoint chuyên nghiệp tại Việt Nam,
                        nhưng sở hữu một đội ngũ chuyên gia thiết kế với hơn 7 năm kinh nghiệm.</p>
                        <p>SLIDEDO đã và đang cung cấp dịch vụ cho hàng ngàn doanh nghiệp trên toàn cầu, bao gồm các thị trường khó tính như Đức, Thuỵ Sĩ, Anh, Mỹ và Ả Rập.</p>
                        <p>Với tầm nhìn trở thành doanh nghiệp đứng đầu trong lĩnh vực thiết kế thuyết trình tại Việt Nam, 
                        SLIDEDO hoá dịch vụ thiết kế thuyết trình tại Việt Nam theo tiêu chuẩn châu Âu, hỗ trợ các doanh nghiệp truyền tải tốt nhất ý tưởng thông qua ngôn ngữ thiết kế.</p>
                        <p>Khách hàng của chúng tôi có thể kể những đơn vị tiêu biểu:</p>
                        <p><span className="font-bold text-neutral-800">VIAC</span> - Là tổ chức trọng tài, hòa giải hàng đầu tại Việt Nam và có uy tín quốc tế, những năm gần đây, 
                        VIAC đã giải quyết hàng nghìn vụ tranh chấp trong nước và quốc tế liên quan đến tất cả lĩnh vực như mua bán hàng hóa, 
                        vận tải, bảo hiểm, xây dựng, tài chính, ngân hàng, đầu tư và các lĩnh vực khác</p>
                        <p><span className="font-bold text-neutral-800">VMC</span> - Với đội ngũ hòa giải viên là các chuyên gia hàng đầu trong các lĩnh vực pháp luật và kinh tế 
                        và được đào tạo chuyên sâu về giải quyết tranh chấp nói chung cũng như hòa giải thương mại nói riêng 
                        VMC mong muốn sẽ là trung tâm được các doanh nghiệp tin tưởng, ưu tiên lựa chọn khi có tranh chấp phát sinh.</p>
                        <p><span className="font-bold text-neutral-800">Indochina Herb</span> - Tự hào là doanh nghiệp tiên phong trong lĩnh vực Dược Liệu tại Việt Nam. 
                        Tầm nhìn của công ty là trở thành doanh nghiệp dẫn đầu trong lĩnh vực Giám định Dược liệu và cung cấp Dược liệu với tiêu chuẩn cao.</p>
                        <p><span className="font-bold text-neutral-800">NISSAN</span> - Cùng với sự hỗ trợ của hệ thống đại lý lớn mạnh, thương hiệu Nissan đã có những thấu hiểu sâu sắc về thị trường 
                        và luôn nỗ lực để đưa ra các giải pháp tốt nhất cho khách hàng.</p>
                        <p><span className="font-bold text-neutral-800">BIOLAK</span> - Hành trình đi tìm giá trị cho cây cỏ bản địa, chúng tôi đã nghiên cứu và phát triển các dòng sản phẩm chăm sóc da 
                        và cơ thể với nguyên liệu bản địa tri thức bản địa kết hợp các công nghệ sản xuất hiện đại.</p>
                        <p><span className="font-bold text-neutral-800">CMC Telecom</span> - tập trung cung cấp dịch vụ Internet, Truyền số liệu, Data Center, Cloud cho nhóm khách hàng doanh nghiệp, 
                        tổ chức chính phủ, tập đoàn nước ngoài tại Việt Nam.</p>
                    </div>
                </div>
                <div className="mt-20 text-pretty sm:grid sm:grid-cols-12 border-t pt-10 mb-10">
                    <p className="font-semibold text-2xl tracking-tight text-neutral-800 mb-5 sm:col-span-5">Sample screenshot</p>
                    <div className="space-y-10 md:space-y-0 sm:col-span-7 md:grid md:grid-cols-2 md:gap-10 mb-10">
                        <img src="" className="w-full h-60 md:h-40 lg:h-60 rounded-lg border" alt="" />
                        <img src="" className="w-full h-60 md:h-40 lg:h-60 rounded-lg border" alt="" />
                        <img src="" className="w-full h-60 md:h-40 lg:h-60 rounded-lg border" alt="" />
                        <img src="" className="w-full h-60 md:h-40 lg:h-60 rounded-lg border" alt="" />
                    </div>
                </div>
                <div className="mt-20 text-pretty sm:grid sm:grid-cols-12 border-t pt-10">
                    <p className="font-semibold text-2xl tracking-tight text-neutral-800 mb-5 sm:col-span-5">Nền tảng sử dụng</p>
                    <div className="space-y-4 sm:space-y-0 sm:col-span-7 sm:grid sm:grid-cols-2 sm:gap-5">
                        <p>Powerpoint</p>
                        <p>Google slide</p>
                        <p>Keynote</p>
                        <p>Canva</p>
                        <p>Pitch</p>
                    </div>
                </div>
            </div>
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
        </div>
    );
};

export default AboutUs;