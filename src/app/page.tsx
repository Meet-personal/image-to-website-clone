"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

export default function Home() {
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="gradient-blue text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm mb-4">Think North Services</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Precision-Driven Financial Strategies for Corporates & HNIs
                </h1>
                <p className="text-brand-lighter mb-8 leading-relaxed">
                  Think North is your partner for next-generation finance, accounting, and strategic advisory solutions. With expertise in global markets, compliance, and digital transformation, trusted by top business leaders, our commitment lies in delivering clarity, compliance, and sustainable growth, helping you navigate financial complexities with confidence and precision.
                </p>
                <button className="bg-white text-brand px-6 py-3 rounded font-semibold hover:bg-[#f7efff] transition-colors">
                  CONNECT NOW ➔
                </button>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm">5/5 rated by businesses</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                  alt="Financial professionals"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Strip */}
        <div className="bg-white border-y border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-700">
              <div>★ Global Tax Structuring & Compliance Advisory</div>
              <div>★ Seamless Fundraising & Capital Solutions</div>
              <div>★ Advanced Internal Audits for Risk-Free Growth</div>
              <div>★ Institutional-Grade Financial Reporting</div>
              <div>★ Dedicated NRI & International Investment Support</div>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
              <p className="text-gray-600">
                Experience a comprehensive range of solutions tailored for modern businesses and discerning individuals:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
                  alt="Global Services"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Global Services – Corporates & HNIs</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Sophisticated tax, structuring, and cross-border compliance solutions for growth-focused corporates and discerning HNIs.
                  </p>
                  <Link href="/services" className="text-brand font-semibold hover:text-brand-dark transition-colors">
                    KNOW MORE ➔
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                  alt="Finance & Accounting"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Finance & Accounting Solutions</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Streamlined systems and expert reporting that deliver clarity, control, and compliance, every quarter.
                  </p>
                  <Link href="/services" className="text-brand font-semibold hover:text-brand-dark transition-colors">
                    KNOW MORE ➔
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                  alt="Fundraising & Advisory"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Fundraising, Capital Advisory & Financial Writing</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Capital strategy, fundraising support, and investor-grade documentation for businesses at every stage.
                  </p>
                  <Link href="/services" className="text-brand font-semibold hover:text-brand-dark transition-colors">
                    KNOW MORE ➔
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
                  alt="Audit & Diligence"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Internal Audit, Due Diligence & Litigation</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Deep-dive audits, robust diligence, and regulatory guidance to protect value and ensure governance excellence.
                  </p>
                  <Link href="/services" className="text-brand font-semibold hover:text-brand-dark transition-colors">
                    KNOW MORE ➔
                  </Link>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg mb-4">
                <span className="text-sm">⭐ Trusted by 100+ businesses</span>
              </div>
              <Link
                href="/services"
                className="inline-block bg-brand-dark text-white px-8 py-3 rounded font-semibold hover:bg-brand transition-colors"
              >
                EXPLORE YOUR OPTIONS ➔
              </Link>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">VALUE PROPOSITION</h2>
                <p className="text-lg font-semibold text-gray-900 mb-6">Your Strategic Partner</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-start">
                      <span className="text-brand mr-2">➜</span>
                      VISION
                    </h3>
                    <p className="text-gray-600 ml-6">
                      To become the most trusted and forward-thinking Chartered Accountancy firm, offering strategic solutions that fuel growth and success for every business we work with.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-start">
                      <span className="text-brand mr-2">➜</span>
                      MISSION
                    </h3>
                    <p className="text-gray-600 ml-6">
                      We empower clients with financial clarity through expert, comprehensive services in auditing, taxation, and advisory. We support businesses of all sizes on a true partner in your financial journey.
                    </p>
                  </div>
                </div>

                <button className="mt-8 bg-brand-dark text-white px-6 py-3 rounded font-semibold hover:bg-brand transition-colors">
                  KNOW MORE ➔
                </button>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                  alt="Business presentation"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute bottom-6 right-6 bg-brand-dark text-white p-6 rounded-lg shadow-xl">
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <div className="text-sm">Happy Accountants</div>
                  <div className="mt-4 text-4xl font-bold mb-2">15</div>
                  <div className="text-sm">Years of experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <motion.section
          ref={teamRef}
          initial={{ opacity: 0, y: 60 }}
          animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">LEADERSHIP WITH VISION</h2>
              <p className="text-gray-600">
                Think North is helmed by visionary Chartered Accountants and finance experts with over 12 years’ global advisory experience. Our founders combine deep technical knowledge with hands-on industry insight, setting high standards of integrity, client focus, and strategic innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
                  alt="Vardhan Shah"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">Vardhan Shah</h3>
                  <p className="text-gray-600 text-sm mb-2">CEO</p>
                  <p className="text-gray-500 text-xs">
                    International tax expert, IFRS specialist, and recognized for pioneering digital finance solutions.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop"
                  alt="Co-Founder"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">Co-Founder</h3>
                  <p className="text-gray-600 text-sm mb-2">Strategic Head</p>
                  <p className="text-gray-500 text-xs">
                    Renowned for cross-border investment structuring and compliance leadership.
                  </p>
                </div>
              </Card>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 text-center leading-relaxed">
                At Think North Services LLP., our team brings a strategic edge to every engagement, combining technical knowledge with first-hand business expertise. From accounting to business building and operations, we approach every project with both precision and purpose, ensuring that our clients receive more than just service—they earn a trusted financial partner.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Client Logos */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR CLIENTS</h2>
              <p className="text-gray-600">Trusted by industry leaders, visionary founders, and global decision-makers</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-12">
              {[
                "Fountainhead",
                "Nouveau",
                "Maxilk",
                "Eminent Care",
                "Venus+",
                "Terra.do",
                "HYOU",
                "Shah",
                "24/7",
                "Wealth New Realty",
                "---",
                "Lambretta"
              ].map((client, idx) => (
                <div key={idx} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                  <div className="text-center font-bold text-gray-700">{client}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-6">
                Here are just a few of the businesses partnering with ThinkNorth Services for clarity and growth.
              </p>
              <Link
                href="/collaborations"
                className="inline-block bg-brand-dark text-white px-8 py-3 rounded font-semibold hover:bg-brand transition-colors"
              >
                EXPLORE WHAT WE DELIVERED ➔
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">NATIONAL AND INTERNATIONAL RESULTS</h2>
              <p className="text-gray-600">
                Our commitment to excellence reflects in the feedback we receive.<br />
                Here's what some of our clients have to say.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "Think North streamlined our international expansion, ensuring seamless compliance and measurable savings."
                    </p>
                    <div className="mt-4">
                      <div className="font-bold">CFO</div>
                      <div className="text-sm text-gray-600">Indian Tech Exporter</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "Their team’s expertise in audit and capital raising enabled our SME-IPO journey with confidence."
                    </p>
                    <div className="mt-4">
                      <div className="font-bold">Promoter</div>
                      <div className="text-sm text-gray-600">Manufacturing Group</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "Professional, insightful, and always accessible, the Think North difference is unmatched."
                    </p>
                    <div className="mt-4">
                      <div className="font-bold">NRI Client</div>
                      <div className="text-sm text-gray-600">UK</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(75,39,100,0.8)]"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Thinking of numbers?<br />Think North.</h2>
            <Link
              href="/contact"
              className="inline-block bg-brand-dark text-white px-8 py-3 rounded font-semibold hover:bg-brand transition-colors"
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