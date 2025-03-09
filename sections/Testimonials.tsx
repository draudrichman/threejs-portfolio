import { clientReviews } from "@/constants";
import Image from "next/image";

const Testimonials = () => {
    return (
        <section className="sm:px-10 px-5 my-20">
            <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">Hear from My Clients</h3>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
                {clientReviews.map((item) => (
                    <div key={`review-${item.id}`} className="rounded-lg md:p-10 p-5 col-span-1 bg-[#1C1C21]/50">
                        <div>
                            <p className="text-[#E4E4E6] font-light">{item.review}</p>

                            <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7">
                                <div className="flex gap-3">
                                    <Image src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" height={48} width={48} />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-[#E4E4E6]">{item.name}</p>
                                        <p className="text-[#62646C] md:text-base text-sm font-light">{item.position}</p>
                                    </div>
                                </div>

                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Image key={index} src="/assets/star.png" alt="star" className="w-5 h-5" height={20} width={20} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;