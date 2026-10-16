import Image from "next/image";
import Link from "next/link";

interface AuthVisualProps {
  title: string;
  description: string;
}

const AuthVisual = ({ title, description }: AuthVisualProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 h-30 absolute top-0">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="inline-flex items-center"
        >
          <Image
            src="/images/logo.svg"
            alt="ByteSpace logo"
            width={29}
            height={32}
            className="h-auto w-auto"
            priority
          />
        </Link>
      </div>

      <div className="max-w-143 mt-29 mb-13 md:mt-10 md:mb-10 lg:mb-16 xl:mb-19 lg:mt-30 xl:mt-30">
        <h1 className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-1%] bg-shuttle-gradient bg-clip-text text-transparent">
          {title}
        </h1>

        <p className="mt-4 max-w-130.75 text-lg text-shuttle-gray-50 leadin-[160%]">
          {description}
        </p>
      </div>

      <div className="relative max-w-130">
        <div className="overflow-hidden">
          <Image
            src="/images/register-image.png"
            alt="ByteSpace learning platform preview"
            width={640}
            height={520}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthVisual;
