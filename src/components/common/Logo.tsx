import Image from "next/image";

export interface LogoProps {
  variant?: "default" | "footer";
}

const Logo = ({ variant = "default" }: LogoProps) => {
  const logoTextSrc =
    variant === "footer"
      ? "/images/ByteSpace-black.svg"
      : "/images/ByteSpace.svg";

  return (
    <div className="flex justify-start items-end gap-2">
      <Image
        src="/images/logo.svg"
        alt="ByteSpace logo"
        width={29}
        height={32}
        priority={variant === "default"}
        className="w-auto h-auto"
      />
      <Image
        src={logoTextSrc}
        alt="ByteSpace logo"
        width={134}
        height={30}
        priority={variant === "default"}
        className="w-auto h-auto"
      />
    </div>
  );
};

export default Logo;
