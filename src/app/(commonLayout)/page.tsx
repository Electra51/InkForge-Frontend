import { HeroSection } from "@/components/pages/HeroSection";
import { userService } from "@/services/user.service";

export default async function Home() {
  const { data } = await userService.getSession();

  return (
    <div>
      <HeroSection />
    </div>
  );
}
