
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const contactDetails = [
  {
    icon: "phone",
    title: "Phone",
    detail: "+92 313 9810579",
    href: "tel:+923139810579",
  },
   {
    icon: "whatsapp",
    title: "WhatsApp",
    detail: "Chat with us",
    href: "https://wa.me/923139810579",
  },
    {
    icon: "instagram",
    title: "Instagram",
    detail: "@cafecopenhagen1",
    href: "https://www.instagram.com/cafecopenhagen1/",
  },
  {
    icon: "tiktok",
    title: "TikTok",
    detail: "@cafe.copenhagen",
    href: "https://www.tiktok.com/@cafe.copenhagen",
  },
 
  {
    icon: "location",
    title: "Address",
    detail: "University Town, Bhittani Plaza 2 floor.",
  },
 
  {
    icon: "clock",
    title: "Opening Hours",
    detail: "Monday – Sunday: 9:30 AM – 11:00 PM",
  },

];

function ContactIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 sm:h-7 sm:w-7"
      {...common}
      aria-hidden="true"
    >
      {type === "phone" && (
        <path d="M7 3h3l2 5-2.5 1.8a15 15 0 0 0 4.7 4.7L16 12l5 2v3c0 2-2 4-4 4C9 20 4 15 3 7c0-2 2-4 4-4Z" />
      )}
    {type === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </>
      )}

      {type === "tiktok" && (
        <path d="M14 3v11a4 4 0 1 1-4-4M14 3c1 4 3 5 6 5" />
      )}

    
{type === "whatsapp" && (
  <>
    <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
    <path d="M8.5 7.8c-.3 0-.6.2-.8.5-.4.5-.9 1.2-.9 2.1 0 1 .7 2.2 1.6 3.2 1.1 1.4 2.6 2.5 4.4 3.1 1 .3 1.8.2 2.5-.2.5-.3.9-.9 1-1.4l-.1-.5-2.1-1-.5-.1-.4.5-.7.8c-.2.1-.4.1-.6 0-.9-.4-1.7-1-2.3-1.7-.2-.2-.4-.5-.5-.7-.1-.2 0-.4.1-.5l.5-.6c.2-.2.2-.4.1-.6l-.9-2.1c-.1-.3-.3-.5-.6-.5Z" />
  </>
)}


      {type === "location" && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}

    

      {type === "clock" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      )}

  
    </svg>
  );
}

export default function ContactPage() {
  return (
     <PageTransition>
    <main className="min-h-screen bg-[#FFFDF8] text-[#29241F]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#8B5E34]/15 bg-[#FFFDF8]/85 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-[10px]">
        <div className="relative mx-auto flex h-[88px] max-w-5xl items-center justify-between px-4">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/cafecopenhagen1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#6F6254] transition hover:text-[#9A7135]"
            >
              <ContactIcon type="instagram" />
            </a>

            <a
              href="https://www.tiktok.com/@cafe.copenhagen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#6F6254] transition hover:text-[#9A7135]"
            >
              <ContactIcon type="tiktok" />
            </a>

            <a
              href="https://wa.me/923139810579"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#6F6254] transition hover:text-[#25D366]"
            >
              <ContactIcon type="whatsapp" />
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

          {/* Navigation */}
          <nav className="flex items-center gap-2 text-[11px] text-[#6F6254] sm:gap-3 sm:text-sm">
            <Link href="/about" className="transition hover:text-[#9A7135]">
              About Us
            </Link>
            <span className="text-[#9A7135]/50">|</span>
            <Link href="/contact" className="font-medium text-[#9A7135]">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Simple page title — no repeated café name */}
      <section className="bg-[#E9D9C3] px-5 py-10 text-center sm:py-12">
        <h1 className="font-playfair-display text-4xl font-semibold text-[#29241F] sm:text-5xl">
          Get in Touch
        </h1>
        <div className="mx-auto mt-4 h-px w-12 bg-[#9A7135]" />
      </section>

      {/* Contact details and social media */}
      <section className="mx-auto max-w-3xl px-5 py-6 sm:px-8 sm:py-10">
        <div className="space-y-2">
          {contactDetails.map((item) => {
            const content = (
              <>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A8793E] text-white sm:h-14 sm:w-14">
                  <ContactIcon type={item.icon} />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-semibold text-[#29241F] sm:text-base">
                    {item.title}
                  </h2>
                  <p className="mt-1 break-words text-sm leading-5 text-[#6F6254]">
                    {item.detail}
                  </p>
                </div>

              </>
            );

            const cardClass =
              "flex items-center gap-4 border-b border-[#8B5E34]/15 px-2 py-3 transition sm:gap-5 sm:py-4";

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`${cardClass} hover:bg-[#F7F1E8]`}
              >
                {content}
              </a>
            ) : (
              <div key={item.title} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#29241F] px-6 py-3 text-sm text-white transition hover:bg-[#45392D]"
          >
            <span aria-hidden="true">←</span>
            Back to Menu
          </Link>
        </div>
      </section>
    </main>
    </PageTransition>
  );
}
