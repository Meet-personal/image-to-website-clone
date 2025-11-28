import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="gradient-purple-blue py-12 border-t border-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Address */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Our Offices</h3>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <div>
                <p className="font-semibold text-gray-900">Surat HQ</p>
                <p>806, Rajhans Montessa, Airport Road,</p>
                <p>Surat - 395007</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Mumbai Office</p>
                <p>503, Neelkanth Corporate Park,</p>
                <p>Vidya Vihar West, Mumbai - 400086</p>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contacts</h3>
            <p className="text-gray-700 text-sm mb-2">📞 +91 80000 98089</p>
            <p className="text-gray-700 text-sm mb-2">✉️ vardhan@thinknorth.co.in</p>
            <p className="text-gray-700 text-sm">🌐 www.thinknorth.co.in</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900 mb-2">Follow us on</p>
              <a
                href="#"
                className="inline-flex items-center text-brand hover:text-brand-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Subscribe to our newsletter</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-brand text-white px-6 py-2 rounded-md hover:bg-brand-dark transition-colors font-medium"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-700 text-sm font-medium">
            Think North Services LLP.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Design and Developed by <a href="https://codemario.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Codemario</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
