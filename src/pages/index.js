import Head from "next/head";
import Navbar from "@components/nav/Navbar";
import HeroContainer from "@components/hero/Container";
import SkillsContainer from "@components/skills/Container";
import About from "@components/about/Container";
import Contact from "@components/contact/Container";
import Projects from "@components/projects/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nathan Lazo</title>
        <meta name="description" content="Personal portafolio website." />
        <link rel="icon" href="/eth.png" />
      </Head>
      <div className="">
        <Navbar />

        <main className="ml-16 bg-[#001220]">
          {/* Hero */}
          <section id="home" className="bg-[#303434]">
            <div id="stars" className="absolute left-0"></div>
            <div id="stars2" className="absolute left-0"></div>
            <div id="stars3" className="absolute left-0"></div>
            <div id="stars2" className="absolute"></div>
            <HeroContainer />
            <div className="spacer-hero-bottom layer-hero-bottom"></div>
          </section>


          {/* Skills */}
          <section  className="bg-[#001220ad]">
            <div className="spacer-skills-top layer-skills-top z-50"></div>
            <SkillsContainer />
          </section>


          {/* About */}
          <section id="about" className="bg-[#001220ad]">
            <About />
          </section>

          <div className="flex flex-col space-y-96 md:space-y-0">
          {/* Projects */}
          <div id="projects" className="h-screen w-full text-white">
            <Projects />
          </div>


          {/* Contact */}
          <div id="contact" className="flex justify-center h-full pb-24 sm:py-24 my-6">
            <Contact />
          </div>
          </div>
        </main>
      </div>
    </>
  );
}
