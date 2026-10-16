import Link from "next/link";
import Logo from "../components/common/Logo";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-23">
          <div className="lg:w-132 flex flex-col gap-4">
            <Logo variant="footer" />

            <p className="text-shuttle-gray-950 text-sm max-w-127.5">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 max-w-126 pt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-2 md:h-13 rounded-full border border-gray-300 text-sm md:text-base text-shuttle-gray-950 placeholder-shuttle-gray-950 focus:outline-none focus:ring-2 focus:ring-electric-lime-400 focus:border-transparent"
              />
              <button className="bg-electric-lime-400 hover:bg-lime-300 text-shuttle-gray-950 text-base md:text-[18px] font-medium px-6 py-2 md:h-11.5 rounded-full transition-colors duration-200 whitespace-nowrap">
                Search
              </button>
            </div>

            <p className="text-shuttle-gray-950 text-xs leading-relaxed max-w-md pt-2">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy-policy"
                className="hover:underline text-shuttle-gray-950"
              >
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-15 xl:gap-20.75 lg:mt-12">
            {/* {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-shuttle-gray-950 text-sm hover:text-lime-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))} */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-shuttle-gray-950 text-sm">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-col text-center sm:flex-row md:text-left gap-3 md:gap-6">
            <Link
              href="/privacy-policy"
              className="text-shuttle-gray-950 text-sm hover:text-shuttle-gray-950 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-shuttle-gray-950 text-sm hover:text-shuttle-gray-950 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies-settings"
              className="text-shuttle-gray-950 text-sm hover:text-shuttle-gray-950 transition-colors duration-200"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
