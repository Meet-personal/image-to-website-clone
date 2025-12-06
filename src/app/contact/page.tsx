"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import ClientLogos from "@/components/ClientLogos";
import ServicesMarquee from "@/components/ServicesMarquee";

const contactChannels = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 80000 98089",
    href: "tel:+918000098089"
  },
  {
    icon: "✉️",
    label: "Email",
    value: "vardhan@thinknorth.co.in",
    href: "mailto:vardhan@thinknorth.co.in"
  },
  {
    icon: "🌐",
    label: "Website",
    value: "www.thinknorth.co.in",
    href: "https://www.thinknorth.co.in"
  }
];



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [activeLocation, setActiveLocation] = useState<'Surat' | 'Mumbai'>('Surat');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="gradient-blue text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Direction to Smarter Financial Choices
                </h1>
                <p className="text-brand-lighter mb-8 leading-relaxed">
                  ThinkNorth Services LLP blends strategic finance, compliance, and technology to guide ambitious teams with clarity. Let’s design clearer paths for growth from Surat to Mumbai and beyond.
                </p>
                <div className="space-y-6 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Growth-Ready Advisory</h3>
                      <p className="text-brand-lighter text-sm">Strategic guidance for startups and SMEs</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Compliance Excellence</h3>
                      <p className="text-brand-lighter text-sm">Dependable tax and regulatory support</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Tech-Forward Solutions</h3>
                      <p className="text-brand-lighter text-sm">Modern tools for financial clarity</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Strip */}
        <ServicesMarquee />

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side - Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-xl text-brand font-medium mb-6">
                  Looking for structured financial support, growth-ready advisory, or dependable tax guidance?
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At ThinkNorth Services, we help startups, SMEs, corporates, and individuals navigate every financial challenge with confidence, always pointing you toward the <strong>Right Direction</strong>.
                </p>
                <p className="text-gray-800 mb-8 font-semibold">
                  Get in touch and let’s build the path that leads your business <strong>True North</strong> toward its next stage of growth.
                </p>

                <div className="space-y-6 mt-8">
                  {contactChannels.map((channel) => (
                    <div key={channel.label}>
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="text-brand mr-2">{channel.icon}</span>
                        {channel.label}
                      </h3>
                      <a
                        href={channel.href}
                        className="text-brand hover:text-brand-dark transition-colors"
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {channel.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form */}
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      placeholder="Your last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      placeholder="Enter your message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand text-white px-6 py-3 rounded font-semibold hover:bg-brand-dark transition-colors"
                  >
                    SUBMIT ➔
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-[600px] w-full overflow-hidden">
          {/* Full Width Map Background */}
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src={activeLocation === 'Surat'
                ? "https://www.google.com/maps?q=Rajhans%20Montessa%20Surat&output=embed"
                : "https://www.google.com/maps?q=Neelkanth%20Corporate%20Park%20Mumbai&output=embed"
              }
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.2) opacity(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="w-full h-full"
            />
          </div>

          {/* Floating Content Card */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full border border-white/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Visit Our Strategy Hubs
              </h2>
              <p className="text-gray-600 mb-8">
                Select a location to view on map
              </p>

              {/* Location Toggles */}
              <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
                <button
                  onClick={() => setActiveLocation('Surat')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${activeLocation === 'Surat'
                    ? "bg-white text-brand shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  Surat HQ
                </button>
                <button
                  onClick={() => setActiveLocation('Mumbai')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${activeLocation === 'Mumbai'
                    ? "bg-white text-brand shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  Mumbai Office
                </button>
              </div>

              {/* Active Location Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-brand mr-2">📍</span>
                    {activeLocation === 'Surat' ? "Surat Headquarters" : "Mumbai Branch"}
                  </h3>
                  <div className="text-gray-600 pl-7 space-y-1">
                    {activeLocation === 'Surat' ? (
                      <>
                        <p>806, Rajhans Montessa,</p>
                        <p>Airport Road, Surat - 395007</p>
                      </>
                    ) : (
                      <>
                        <p>503, Neelkanth Corporate Park,</p>
                        <p>Vidya Vihar West, Mumbai - 400086</p>
                      </>
                    )}
                  </div>
                </div>

                <a
                  href={activeLocation === 'Surat'
                    ? "https://www.google.com/maps?q=Rajhans%20Montessa%20Surat"
                    : "https://www.google.com/maps?q=Neelkanth%20Corporate%20Park%20Mumbai"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand text-white text-center px-6 py-3 rounded font-semibold hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                >
                  GET DIRECTIONS ➔
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogos
          title="OUR ESTEEMED CLIENTS"
          description="We are proud to have partnered with diverse businesses that rely on ThinkNorth Services LLP as their trusted financial partner."
        />

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
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop"
                    alt="Client building"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      K P Bhagat & Co has been our trusted accounting & tax advisory company for the last 2 years. We've been highly impressed by their financial management. Their expertise and professionalism have been invaluable to Short Amusement Ltd.
                    </p>
                    <div className="font-bold">Mr. James John</div>
                    <div className="text-sm text-gray-600">CEO, Short Amusement Ltd</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop"
                    alt="Client building"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      K P Bhagat & Co has been our go-to partner for CA services specializing in accounting, tax filing and compliance. Their expertise and attention to detail have been exceptional.
                    </p>
                    <div className="font-bold">CA Adesh Mehta</div>
                    <div className="text-sm text-gray-600">Group CFO, K. Ghelawala Group</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WORDS THAT COUNT MORE THAN NUMBERS</h3>
              <p className="text-gray-600">These are just a few of the voices behind the numbers.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
