"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ClientLogos from "@/components/ClientLogos";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import ServicesMarquee from "@/components/ServicesMarquee";
import { BlinkingEye, TargetHit } from "@/components/AnimatedIcons";
import { services } from "@/data/services";

export default function ServicesClient() {

    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="gradient-blue text-white pt-32 pb-12 sm:pb-20 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <div className="text-sm mb-4">Think North</div>
                                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                    Strategic CA Solutions Designed for Long-Term Financial Confidence
                                </h1>
                                <p className="text-brand-lighter mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                                    We blend precision, insight, and proactive financial intelligence to deliver bookkeeping, advisory, audit, and compliance solutions tailored for the fast-evolving needs of startups, SMEs, corporates, and high-growth enterprises.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-brand px-6 py-3 rounded font-semibold hover:bg-[#f7efff] transition-colors">
                                    CONNECT NOW ➔
                                </Link>
                            </div>
                            <div className="relative mt-6 md:mt-0">
                                <img
                                    src="/images/services/service page 1. banner image.png"
                                    alt="Business meeting"
                                    className="rounded-lg shadow-2xl h-[250px] sm:h-[350px] md:h-[400px] w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Strip */}
                <ServicesMarquee />

                {/* Our Services Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR EXPERTISE</h2>
                            <div className="text-gray-600 space-y-4">
                                <p>
                                    At Think North Services LLP, we provide integrated financial, strategic, and compliance solutions that help businesses scale smarter, stay compliant, and make confident decisions.
                                </p>
                                <p>
                                    Designed for modern enterprises, our offerings prioritize accuracy, agility, governance, and long-term business value
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service) => (
                                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="font-bold text-lg mb-3 line-clamp-2 min-h-[3.5rem]">{service.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                                            {service.description}
                                        </p>
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="bg-brand text-center text-white px-6 py-2 rounded font-semibold hover:bg-brand-dark transition-colors w-full mt-auto block"
                                        >
                                            EXPLORE YOUR OPTIONS ➔
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <div className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg">
                                <span className="text-sm">⭐ Trusted by 100+ businesses</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Value Proposition */}
                <section className="py-12 sm:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">VALUE PROPOSITION</h2>
                                <p className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Your Strategic Partner</p>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <div className="text-brand mr-2">
                                                <BlinkingEye className="w-6 h-6" />
                                            </div>
                                            VISION
                                        </h3>
                                        <p className="text-gray-600 ml-6">
                                            To become the most trusted and forward-thinking Chartered Accountancy firm, offering strategic solutions that fuel growth and success for every business we work with.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <div className="text-brand mr-2">
                                                <TargetHit className="w-6 h-6" />
                                            </div>
                                            MISSION
                                        </h3>
                                        <p className="text-gray-600 ml-6">
                                            We empower clients with financial clarity through expert, comprehensive services in auditing, taxation, and advisory.
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href="/services"
                                    className="inline-block bg-brand text-white px-8 py-3 rounded font-semibold hover:bg-brand-dark transition-colors"
                                >
                                    KNOW MORE ➔
                                </Link>
                            </div>

                            <div className="relative mt-8 md:mt-0">
                                <img
                                    src="/images/services/Our services last link image.png"
                                    alt="Business presentation"
                                    className="rounded-lg shadow-lg h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover"
                                />
                                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-brand-dark text-white p-4 sm:p-6 rounded-lg shadow-xl">
                                    <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">20+</div>
                                    <div className="text-xs sm:text-sm">Clients</div>
                                    <div className="mt-2 sm:mt-4 text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">15</div>
                                    <div className="text-xs sm:text-sm">Years of experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Logos */}
                <ClientLogos title="OUR ESTEEMED CLIENTS" description="Trusted by Businesses That Trust Numbers" />

                {/* CTA Section */}
                <section className="relative py-12 sm:py-20">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop')",
                        }}
                    >
                        <div className="absolute inset-0 bg-[rgba(75,39,100,0.8)]"></div>
                    </div>
                    <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
                        <h2 className="text-4xl font-bold mb-6">BIG OR SMALL,<br />FINANCIAL GOALS DESERVE THE RIGHT PARTNER</h2>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-brand px-6 py-3 rounded font-semibold hover:bg-[#f7efff] transition-colors"
                        >
                            START TODAY ➔
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
