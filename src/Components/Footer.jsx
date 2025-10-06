import React from 'react';

export default function Footer() {
  const MailIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <footer
      className="bg-gray-100 text-gray-800 py-12 px-4 overflow-hidden"
      aria-label="Site Footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Shop Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4">SHOP</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/shop/earrings" className="hover:text-gray-600 transition">Earrings</a></li>
              <li><a href="/shop/finger-rings" className="hover:text-gray-600 transition">Finger Rings</a></li>
              <li><a href="/shop/pendants" className="hover:text-gray-600 transition">Pendants</a></li>
              <li><a href="/shop/bracelets" className="hover:text-gray-600 transition">Bracelets</a></li>
              <li><a href="/shop/bangles" className="hover:text-gray-600 transition">Bangles</a></li>
              <li><a href="/shop/chains" className="hover:text-gray-600 transition">Chains</a></li>
              <li><a href="/shop/all" className="hover:text-gray-600 transition font-semibold">ALL</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/faqs" className="hover:text-gray-600 transition">FAQs</a></li>
              <li><a href="/new-in" className="hover:text-gray-600 transition">NEW IN</a></li>
              <li><a href="/jewellery" className="hover:text-gray-600 transition">JEWELLERY</a></li>
              <li><a href="/contact" className="hover:text-gray-600 transition">CONTACT</a></li>
              <li><a href="/about" className="hover:text-gray-600 transition">ABOUT</a></li>
            </ul>
          </div>

          {/* Say Hello Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4">SAY HELLO!</h3>
            <div className="space-y-3">
              <a
                href="mailto:atomconnect@mail.com"
                className="flex items-center gap-2 text-sm hover:text-gray-600 transition"
              >
                <MailIcon />
                <span>atomconnect@mail.com</span>
              </a>
              <a
                href="https://instagram.com/atomconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-gray-600 transition"
              >
                <InstagramIcon />
                <span>@atomconnect</span>
              </a>
              <a
                href="https://wa.me/917340733286"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-gray-600 transition"
              >
                <WhatsAppIcon />
                <span>(+91) 7340733286</span>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4">CONTACT</h3>
            <div className="space-y-2 text-sm">
              <p>Chandigarh, India</p>
              <p className="pt-2">
                <a href="tel:+917340733286" className="hover:text-gray-600 transition">
                  (+91) 7340733286
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Brand / Logo */}
        <div className="font-serif font-bold text-8xl lg:text-9xl text-center mt-10 -mb-20 overflow-hidden ">
          <h2 className='text-gray-400'>TAMP</h2>
        </div>
        
      </div>
    </footer>
  );
}
