import { HeroSection } from "@/components/pages/HeroSection";
import { authClient } from "@/lib/auth-client";

export default async function Home() {
  const session = await authClient.getSession();
  console.log("session", session);
  return (
    <div>
      <HeroSection />
    </div>
  );
}
