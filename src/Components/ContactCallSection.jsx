import HERO_ILLUSTRATION from "../assets/six-sigma-support-operations.png";

export default function ContactCallSection({
  illustration = HERO_ILLUSTRATION,
}) {
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
              A roadmap for readying key roles in your organization for business
              in the digital age.
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
             {/* WhatsApp Button */}
<div className="flex flex-col">
  <span className="text-sm text-white/80 mb-2">WhatsApp</span>
  <a
    href="https://wa.me/917852017051"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-3 bg-white text-[#0b4f7a] px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 font-bold text-lg"
    aria-label="WhatsApp +91-7852017051"
  >
    <svg
      className="w-6 h-6 flex-shrink-0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Green outer + white phone-ish shape inside */}
      <path
        style={{ fill: "#25D366" }}
        d="M12 2C6.48 2 2 6.17 2 11.58c0 1.93.57 3.72 1.64 5.3L2 22l5.27-1.6A10.5 10.5 0 0 0 12 21.16c5.52 0 10-4.17 10-9.58C22 6.17 17.52 2 12 2Zm0 17.6c-1.6 0-3.16-.44-4.52-1.28l-.32-.19-3.12.95.96-3-.2-.31A7.39 7.39 0 0 1 4.6 11.6C4.6 7.74 8 4.6 12 4.6s7.4 3.14 7.4 7-3.4 8-7.4 8Zm4-5c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.93-.38-1.77-1.18-.65-.61-1.08-1.36-1.2-1.59-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.03-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38H9c-.15 0-.4.06-.61.28-.2.22-.8.78-.8 1.9 0 1.11.82 2.19.94 2.34.11.15 1.62 2.63 4.02 3.69.56.24.99.38 1.33.49.56.18 1.07.15 1.47.09.45-.07 1.3-.53 1.48-1.05.18-.52.18-.96.12-1.05-.06-.09-.2-.15-.41-.25Z"
      />
    </svg>
    <span>+91-7852017051</span>
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
