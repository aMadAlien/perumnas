import Homepage from "@/components/Homepage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="">
      <div className="absolute z-[100] w-full">
        <Header />
      </div>

      <div className="hero-section">
        <h1 className="hero-section__title">
          More Comfortable.
          <br />
          More Classy.
        </h1>

        <p className="hero-section__subtitle">Make your living experience even more memorable.</p>
      </div>

      <Homepage />

      <Footer />
    </div>
  );
}
