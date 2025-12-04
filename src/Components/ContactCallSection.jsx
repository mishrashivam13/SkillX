import HERO_ILLUSTRATION from '../assets/six-sigma-support-operations.png';

export default function ContactCallSection({ illustration = HERO_ILLUSTRATION }) {
  return (
    <section className="w-full bg-[#242f4d] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Get expert guidance—call or WhatsApp us today!!
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-xl mb-10">
              A roadmap for readying key roles in your organization for business in the digital age.
            </p>

            {/* Buttons Block */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              {/* Call Button */}
              <div className="flex flex-col">
                <span className="text-sm text-white/80 mb-2">Call</span>
                <a
                  href="tel:+917852017051"
                  className="inline-flex items-center gap-3 bg-white text-[#0b4f7a] px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 font-bold text-lg"
                  aria-label="Call +91-7852017051"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 1.08 4.18 2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.12.9.38 1.77.76 2.58a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.11-.45c.82.38 1.7.64 2.59.76A2 2 0 0 1 22 16.92z"
                      fill="#2a9d55"
                    />
                  </svg>
                  <span>+91-7852017051</span>
                </a>
              </div>

              {/* WhatsApp Button */}
              <div className="flex flex-col">
                <span className="text-sm text-white/80 mb-2">WhatsApp</span>
                <a
                  href="https://wa.me/917021247809"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#0b4f7a] px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 font-bold text-lg"
                  aria-label="WhatsApp +91-7021247809"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20.5 3.5A11 11 0 1 0 12 23a11 11 0 0 0 8.5-19.5zm-4.1 13.2c-.2.6-1.1 1.2-1.6 1.3-.4.1-.9.2-1.8-.2-2.2-1-3.7-3.1-4-3.4-.3-.3-2.4-2.9-2.4-5 0-1 .5-1.3.7-1.5.2-.2.5-.4.8-.4.3 0 .6 0 .9 0 .3 0 .6-.1.9.1.3.2 1.2.9 1.4 1.1.2.2.3.4.1.7-.1.2-.2.3-.5.6-.2.3-.7.7-.9 1-.2.3-.4.8 0 1.3.4.5 1.3 1.9 2.8 3.1 1.9 1.6 3.6 2.2 4.3 2.4.7.2 1.2.1 1.6-.1.4-.2 1.2-1.1 1.4-1.9.2-.8.2-1.6.1-1.8-.1-.1-.2-.1-.4-.2z"
                      fill="#25D366"
                    />
                  </svg>
                  <span>+91-7021247809</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Illustration - Now responsive */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={illustration}
              alt="Expert support illustration"
              className="
                w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl
                pointer-events-none
                drop-shadow-2xl
                object-contain
                translate-y-4 lg:translate-y-0
              "
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute inset-x-0 bottom-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-32 sm:h-48">
          <path
            fill="currentColor"
            fillOpacity="0.05"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,240C1248,235,1344,181,1392,154.7L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}