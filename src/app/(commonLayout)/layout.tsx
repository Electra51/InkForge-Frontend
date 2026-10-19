import { Footer1 } from "@/layout/Footer";
import { Navbar } from "@/layout/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer1 />
    </div>
  );
};

export default CommonLayout;
