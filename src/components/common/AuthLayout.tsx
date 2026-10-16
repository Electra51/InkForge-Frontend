import { ReactNode } from "react";
import AuthVisual from "./AuthVisual";
import BlueGridBackground from "./BlueGridBackground";

interface AuthLayoutProps {
  children: ReactNode;
  visualTitle: string;
  visualDescription: string;
}

const AuthLayout = ({
  children,
  visualTitle,
  visualDescription,
}: AuthLayoutProps) => {
  return (
    <BlueGridBackground>
      <div className="mx-auto min-h-screen flex md:flex-row flex-col max-w-7xl items-center justify-center gap-10 lg:gap-12 xl:gap-24 px-5 lg:px-10 xl:px-0 pb-5 lg:pb-5">
        <AuthVisual title={visualTitle} description={visualDescription} />

        <div className="w-full sm:w-120 md:w-124 lg:w-120 xl:w-144.75 rounded-3xl bg-white p-6 sm:p-8 lg:p-10">
          <div className="mx-auto xl:w-113.25">{children}</div>
        </div>
      </div>
    </BlueGridBackground>
  );
};

export default AuthLayout;
