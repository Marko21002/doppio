import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./components/hero";
import { CarouselDemo } from "./components/carousel";
import { ParallaxScroll } from "@/components/ui/parallax";
import Feature from "./components/feature";
import Cta from "./components/cta";
import Listing from "./components/listing";
import Navbar from "./components/navbar";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Cta></Cta>

      <ParallaxScroll
        images={[
          "https://lh3.googleusercontent.com/p/AF1QipPgDNZx5JEwd-RuaVeq13Ey2J67VlOcE9WPUS2T=s1360-w1360-h1020",
          "https://lh3.googleusercontent.com/p/AF1QipPh-dBFirXnj0DImMr6F0S03IRg5R0dWrD_fyET=s1360-w1360-h1020",
          "https://lh3.googleusercontent.com/p/AF1QipOOwxf2aChlMud1vSEtstO296Px7demC1yZxAjG=s1360-w1360-h1020",
          "https://lh3.googleusercontent.com/p/AF1QipNYgcKjF5iaiJ8H6RkFWUQOp_BiLJ24eMGhUeiZ=s1360-w1360-h1020",
          "https://lh3.googleusercontent.com/p/AF1QipOqRbDXMGTH1iM-tYGku0VwsZ4T7bXw0Ifr94Cz=s1360-w1360-h1020",
        ]}
      ></ParallaxScroll>
      <Feature></Feature>
      <Contact></Contact>
      <Listing></Listing>
    </>
  );
}
