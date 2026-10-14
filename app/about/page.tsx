
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
export default function AboutPage() {
  return (  
  <PageTransition>
    <main className="min-h-screen bg-[var(--background)] text-[#29241F]">
      {/* Header — matching the customer menu */}
      <header className="sticky top-0 z-50 border-b border-[#8B5E34]/15 bg-[#FFFDF8]/85 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-[10px]">
        <div className="relative mx-auto flex h-[88px] max-w-5xl items-center justify-between px-4">

          {/* Social icons — left */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/cafecopenhagen1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#6F6254] transition hover:text-[#9A7135]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@cafe.copenhagen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#6F6254] transition hover:text-[#9A7135]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M19.6 6.4a5.7 5.7 0 0 1-3.5-3.8V2h-4.2v13.5a2.8 2.8 0 1 1-2.8-2.8c.4 0 .8.1 1.1.2V8.6a7 7 0 1 0 5.9 6.9V9a9.8 9.8 0 0 0 5.1 1.4V6.3c-.5.1-1.1.1-1.6.1Z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923139810579"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#6F6254] transition hover:text-[#25D366]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
                <path d="M8.5 7.8c-.3 0-.6.2-.8.5-.4.5-.9 1.2-.9 2.1 0 1 .7 2.2 1.6 3.2 1.1 1.4 2.6 2.5 4.4 3.1 1 .3 1.8.2 2.5-.2.5-.3.9-.9 1-1.4l-.1-.5-2.1-1-.5-.1-.4.5-.7.8c-.2.1-.4.1-.6 0-.9-.4-1.7-1-2.3-1.7-.2-.2-.4-.5-.5-.7-.1-.2 0-.4.1-.5l.5-.6c.2-.2.2-.4.1-.6l-.9-2.1c-.1-.3-.3-.5-.6-.5Z" />
              </svg>
            </a>
          </div>

          {/* Centered logo */}
          <Link
            href="/"
            aria-label="Return to menu"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src="/images/logo.webp"
              alt="Cafe Copenhagen"
              width={80}
              height={80}
              className="h-[72px] w-[72px] object-contain"
              priority
            />
          </Link>

          {/* Navigation — right */}
          <nav className="flex items-center gap-2 text-[11px] text-[#6F6254] sm:gap-3 sm:text-sm">
            <Link
              href="/about"
              className="font-medium text-[#9A7135] transition"
            >
              About Us
            </Link>

            <span className="text-[#9A7135]/50">|</span>

            <Link
              href="/contact"
              className="transition hover:text-[#9A7135]"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* About Us content */}
      <div className="mx-auto w-full max-w-5xl px-5 pb-12 pt-10 md:px-8 md:pt-14">
        <section className="mb-12">
          <h1 className="font-playfair-display text-3xl font-semibold leading-tight sm:text-4xl">
            Welcome to Cafe Copenhagen
          </h1>

          <p className="mt-5 font-dm-sans text-sm leading-7 text-[#5F5A53] sm:text-base sm:leading-8">
            Welcome to Cafe Copenhagen a heartwarming gathering place designed
            for what matters most: connection, ambiance, and unforgettable
            moments in great company.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 font-playfair-display text-2xl font-semibold sm:text-3xl">
            Our Core Values
          </h2>

          <div className="space-y-7">
            <div>
              <h3 className="font-dm-sans text-base font-semibold sm:text-lg">
                1. Ambiance:
              </h3>
              <p className="mt-2 font-dm-sans text-sm leading-7 text-[#5F5A53] sm:text-base">
                We believe that a dining experience begins with the atmosphere.
                Our decor blends modern elegance with classic warmth, beautiful
                lighting, and carefully selected music.
              </p>
            </div>

            <div>
              <h3 className="font-dm-sans text-base font-semibold sm:text-lg">
                2. Genuine Hospitality:
              </h3>
              <p className="mt-2 font-dm-sans text-sm leading-7 text-[#5F5A53] sm:text-base">
                To us, service is more than just serving food—We always do our
                best to ensure you feel seen, welcomed, from the moment you
                step through our doors.
              </p>
            </div>

            <div>
              <h3 className="font-dm-sans text-base font-semibold sm:text-lg">
                3. Quality on the Plate:
              </h3>
              <p className="mt-2 font-dm-sans text-sm leading-7 text-[#5F5A53] sm:text-base">
                Our menu reflects our love for food. We serve dishes made to
                bring people together, delighting both the eyes and the palate.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 font-playfair-display text-2xl font-semibold sm:text-3xl">
            Our Ambiance
          </h2>

          <div className="space-y-7">
            <div>
              <h3 className="font-dm-sans text-base font-semibold sm:text-lg">
                For the Family:
              </h3>
              <p className="mt-2 font-dm-sans text-sm leading-7 text-[#5F5A53] sm:text-base">
                We set the stage for a wonderful family meal where there is
                room for big smiles and conversations. Guests of all ages are
                welcome here.
              </p>
            </div>

            <div>
              <h3 className="font-dm-sans text-base font-semibold sm:text-lg">
                For Ladies &amp; Friends:
              </h3>
              <p className="mt-2 font-dm-sans text-sm leading-7 text-[#5F5A53] sm:text-base">
                Ready for a night out? Our stylish interior, creative cocktails,
                and delightful menu options create the perfect backdrop for a
                vibrant, upscale girls' night filled with laughter and great
                catch-ups.
              </p>
            </div>

            <div>
              <h3 className="font-dm-sans text-base font-semibold sm:text-lg">
                For Couples:
              </h3>
              <p className="mt-2 font-dm-sans text-sm leading-7 text-[#5F5A53] sm:text-base">
                Looking for the ideal spot for your next date night? We have
                designed intimate corners with soft lighting, warmth and a
                romantic atmosphere that lets you leave daily stress behind
                and focus completely on each other.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Menu */}
        <div className="mt-12 border-t border-[#8B5E34]/15 pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#29241F] px-6 py-3 font-dm-sans text-sm text-white transition hover:bg-[#45392D]"
          >
            <span aria-hidden="true">←</span>
            Back to Menu
          </Link>

          <p className="mt-5 font-dm-sans text-xs text-[#81786E]">
            Café Copenhagen
          </p>
        </div>
      </div>
    </main>
    </PageTransition>
  );
}
