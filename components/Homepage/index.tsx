import Slider from "./Slider";

export default function Homepage() {
  return (
    <main>
      <section className="px-container py-[60px] md:pt-[120px] md:pb-[80px]">
        <div className="container flex gap-[32px] lg:gap-[5.556vw] max-md:flex-col">
          <h2 className="h2 md:w-[var(--smaller-col)">Enjoy Quality Life in Perumnas Housing</h2>
          <div className="shrink-0 md:max-w-[var(--larger-col)]">
            <p className="text-p mb-[60px] lg:mb-[80px]">Perumnas cluster housing is the right choice for those of you who are looking for comfortable, safe and affordable housing. With the cluster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. Apart from that, you can also enjoy the various facilities provided, such as playgrounds, sports fields, shopping centers, schools, and others.</p>

            <div className="stats__container">
              <div className="stats__block">
                <div className="stats__title">+100</div>
                <div className="stats__text">Units Ready</div>
              </div>
              <div className="stats__block">
                <div className="stats__title">+60K</div>
                <div className="stats__text">Customers</div>
              </div>
              <div className="stats__block">
                <div className="stats__title">+70K</div>
                <div className="stats__text">Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slider />

      <section className="px-container pt-[80px] pb-[120px]">
        <div className="md:ml-auto md:w-[70vw] lg:w-[var(--larger-col)]">
          <h3 className="h3 mb-[18px] md:mb-6">Strategic Location</h3>
          <div className="text-p mb-[60px] md:mb-10">Cluster housing perumnas is located in an area that is easily accessible from various directions. You can reach the city center, airport, train station, bus terminal, and other important places easily and quickly.</div>

          <h3 className="h3 mb-[18px] mb-6">Modern Design</h3>
          <div className="text-p mb-[60px] mb-10">Cluster housing perumnas has a modern and elegant house design. You can choose the type of house that suits your taste and needs, ranging from type 36 to type 120. </div>

          <h3 className="h3 mb-[18px] mb-6">Guaranteed Security</h3>
          <div className="text-p">Cluster housing perumnas has an integrated security system. Each cluster is equipped with a fence, gate, and guard post that are monitored by professional security officers. In addition, each house is also equipped with a fire alarm and CCTV.</div>
        </div>
      </section>
    </main>
  )
}
