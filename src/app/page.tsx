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
                <div className="text-sm mb-4">Think North Services LLP.</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  EMPOWERING<br />FINANCIAL SUCCESS FOR<br />OVER 15 YEARS
                </h1>
                <p className="text-brand-lighter mb-8 leading-relaxed">
                  Think North Services LLP. has been trusted specialists of financial operations, consulting, outsourced management accounting, strategic advisory, governance & optimization, compliance, and assurance services to businesses & start-ups.
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
              <div>🎯 PROJECT FINANCE & BOOKKEEPING</div>
              <div>💼 TRUSTED AUDIT & ASSURANCE SERVICES</div>
              <div>📊 ACCOUNTING, FINANCIAL CONSULTING FOR GROWTH</div>
              <div>💰 EXPERT GST & INDIRECT TAX</div>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
              <p className="text-gray-600">
                We offer comprehensive strategic expertise tailored to help you<br />
                grow, comply, and lead in your industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
                  alt="Financial Operations"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Financial Operations</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We provide end-to-end financial operations support that helps you stay focused on your business...
                  </p>
                  <Link href="/services" className="text-brand font-semibold hover:text-brand-dark transition-colors">
                    KNOW MORE ➔
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                  alt="Strategic Advisory"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Strategic Advisory</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our strategic advisory services help you navigate complex business challenges...
                  </p>
                  <Link href="/services" className="text-brand font-semibold hover:text-brand-dark transition-colors">
                    KNOW MORE ➔
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                  alt="Governance & Optimization"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Governance & Optimization</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We help you ensure robust governance and optimize your business operations...
                  </p>
                  <Link href="/services" className="text-brand font-semibold hover:text-brand-dark transition-colors">
                    KNOW MORE ➔
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
                  alt="Audit & Compliance"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">Audit & Compliance</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our audit and compliance services ensure your business meets regulatory standards...
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">MEET THE TEAM</h2>
              <p className="text-gray-600">Meet the people behind your financial clarity.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
                  alt="CA. Krunal Bhagat"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">CA. KRUNAL BHAGAT</h3>
                  <p className="text-gray-600 text-sm">Principal</p>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop"
                  alt="Bhavesh Shah"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">BHAVESH SHAH</h3>
                  <p className="text-gray-600 text-sm">Partner</p>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                  alt="CA. Shivani Mehta"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">CA. SHIVANI MEHTA</h3>
                  <p className="text-gray-600 text-sm">Chartered Accountant / Audit & Advisory</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR ESTEEMED CLIENTS</h2>
              <p className="text-gray-600">Trusted by Businesses That Trust Numbers</p>
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
                Here are just a few of the businesses partnering with ThinkNorth Services LLP for clarity and growth.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">VOICES OF TRUST & RESULTS</h2>
              <p className="text-gray-600">
                Our commitment to excellence reflects in the feedback we receive.<br />
                Here's what some of our clients have to say.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop"
                    alt="Client building"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      ThinkNorth Services LLP has been our trusted accounting & tax advisory company for the last 2 years. We've been highly impressed by their financial management. Their expertise and professionalism have been invaluable to Short Amusement Ltd.
                    </p>
                    <div className="mt-4">
                      <div className="font-bold">Mr. James John</div>
                      <div className="text-sm text-gray-600">CEO, Short Amusement Ltd</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop"
                    alt="Client building"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      ThinkNorth Services LLP has been our go-to partner for CA services specializing in accounting, tax filing and compliance. Their expertise and attention to detail have been exceptional.
                    </p>
                    <div className="mt-4">
                      <div className="font-bold">CA Adesh Mehta</div>
                      <div className="text-sm text-gray-600">Group CFO, K. Ghelawala Group</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WORDS THAT COUNT MORE THAN NUMBERS</h3>
              <p className="text-gray-600 mb-8">These are just a few of the voices behind the numbers.</p>
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
            <h2 className="text-4xl font-bold mb-6">BIG OR SMALL,<br />FINANCIAL GOALS DESERVE THE RIGHT PARTNER</h2>
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