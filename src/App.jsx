import sedans from "./assets/images/icon-sedans.svg";
import luxury from "./assets/images/icon-luxury.svg";
import suvs from "./assets/images/icon-suvs.svg";

function App() {
  return (
    <>
      <section className=" md:flex md:items-center md:justify-center md:mt-[10%] ">

          <div className="bg-[#e38826] p-10 text-white">
            <img src={sedans} alt="" className="pb-5" />
            <h2 className="pb-5 uppercase text-3xl font-bold">Sedans</h2>
            <p className="pb-5 w-56">
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <button className=" bg-white rounded-full w-36 py-3 text-[#e38826] hover:bg-[#e38826] hover:text-white hover:border">
              Learn More
            </button>
          </div>


          <div className="bg-[#006971] p-10 text-white ">
            <img src={suvs} alt="" className="pb-5" />
            <h2 className="pb-5 uppercase text-3xl font-bold">suvs</h2>
            <p className="pb-5 w-56">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <button className=" bg-white rounded-full w-36 py-3 text-[#006971] hover:bg-[#006971] hover:text-white hover:border">
              Learn More
            </button>
          </div>


          <div className="bg-[#004140] p-10 text-white ">
            <img src={luxury} alt="" className="pb-5" />
            <h2 className="pb-5 uppercase text-3xl font-bold">Luxury</h2>
            <p className="pb-5 w-56">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <button className=" bg-white rounded-full w-36 py-3 text-[#004140] hover:bg-[#004140] hover:text-white hover:border">
              Learn More
            </button>
          </div>

      </section>
    </>
  );
}

export default App;
