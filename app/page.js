import Hero from "./components/hero/hero";
import Navs from "./components/navs/nav";

export default function Home() {
  return (
    <>
      <main style={{ height: "100vh", alignContent: "center" }}>
        <Hero />
      </main>

      <main style={{ height: "100vh", alignContent: "start" }}>
        <div className="container mt-4" id="complain">

          <Navs />          

          <div className="row">
            <div className="col-4">

            </div>
          </div>

        </div>
      </main>

    </>
  );
}
