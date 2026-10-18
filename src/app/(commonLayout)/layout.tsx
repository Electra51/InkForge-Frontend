import { Navbar } from "@/layout/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default CommonLayout;
