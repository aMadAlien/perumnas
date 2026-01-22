import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="absolute w-full">
        <Header />
      </div>

      <Image
        src="https://images.pexels.com/photos/33941272/pexels-photo-33941272.png"
        alt="bg"
        width={1000}
        height={1000}
        className="h-screen w-screen object-cover"
      />

      <Footer />
    </div>
  );
}
