import { HeroSection } from "@/components/pages/HeroSection";

export default async function Home() {
  // const session = await authClient.getSession();
  // console.log("session", session);
  return (
    <div>
      <HeroSection />
    </div>
  );
}
