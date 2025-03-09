import Image from "next/image";

const Footer = () => {
    return (
        <footer className="sm:px-10 px-5 pt-7 pb-3 border-t border-[#1C1C21] flex justify-between items-center flex-wrap gap-5">
            <div className="text-[#62646C] flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10]">
                    <Image
                        src="/assets/github.svg"
                        alt="github" className="w-1/2 h-1/2"
                        height={24}
                        width={24}
                    />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10]">
                    <Image
                        src="/assets/twitter.svg"
                        alt="twitter"
                        className="w-1/2 h-1/2"
                        height={24}
                        width={24}
                    />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10]">
                    <Image
                        src="/assets/instagram.svg"
                        alt="instagram"
                        className="w-1/2 h-1/2"
                        height={24}
                        width={24}
                    />
                </div>
            </div>

            <p className="text-[#62646C]">© 2025 Dris Richman. All rights reserved.</p>
        </footer>
    );
}

export default Footer;