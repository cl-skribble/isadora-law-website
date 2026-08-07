import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Welcome } from "@/components/Welcome";
import { Team } from "@/components/Team";
import { ManagingPartner } from "@/components/ManagingPartner";
import { VisionMission } from "@/components/VisionMission";
import { CoreValues } from "@/components/CoreValues";
import { WhyUs } from "@/components/WhyUs";
import { Achievements } from "@/components/Achievements";
import { Services } from "@/components/Services";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Welcome />
        <Team />
        <ManagingPartner />
        <VisionMission />
        <CoreValues />
        <WhyUs />
        <Achievements />
        <Services />
        <Clients />
      </main>
      <Contact />
    </>
  );
}
