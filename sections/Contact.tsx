'use client';

import Alert from "@/components/Alert";
import useAlert from "@/hooks/useAlert";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const { alert, showAlert, hideAlert } = useAlert();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState<{ name: string; email: string; message: string }>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
                from_name: form.name,
                to_name: 'AUD Richman',
                from_email: form.email,
                to_email: 'richman@aud.com',
                message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        ).then(
            () => {
                setLoading(false);
                showAlert({
                    text: "Thank you for your message 😃",
                    type: "success",
                });

                setTimeout(() => {
                    hideAlert();
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                }, 3000);
            },
            (error: unknown) => {
                setLoading(false);
                console.error(error);
                showAlert({
                    text: "I didn't receive your message 😢",
                    type: "danger",
                });
            }
        );
    };

    return (
        <section className="sm:px-10 px-5 my-20">
            {alert.show && <Alert {...alert} />}
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <Image
                    src={"/assets/terminal.png"}
                    alt="terminal background"
                    className="absolute inset-0 min-h-screen"
                    fill
                />
                <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
                    <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
                        Get In Touch
                    </h3>
                    <p className="text-lg text-[#AFB0B6] mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form
                        action=""
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7"
                    >
                        <label className="space-y-3">
                            <span className="text-lg text-[#AFB0B6]">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="text-lg text-[#AFB0B6]">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="text-lg text-[#AFB0B6]">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="bg-[#3A3A49] px-5 py-2 min-h-12 rounded-lg shadow-[#0E0E10] shadow-2xl flex justify-center items-center text-lg text-white gap-3" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <Image
                                src="/assets/arrow-up.png"
                                alt="arrow-up"
                                className="w-2.5 h-2.5 object-contain invert brightness-0"
                                width={10}
                                height={10}
                            />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
}

export default Contact;