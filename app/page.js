import Hero from "./components/hero/hero";
import Navs from "./components/navs/nav";
import TagCards from "./components/cards/tagsCard";

export default function Home() {
  return (
    <>
      <main style={{ height: "100vh", alignContent: "center" }}>
        <Hero />
      </main>

      <main style={{ height: "100vh", alignContent: "start" }}>
        <div className="container mt-3" id="complain">

          <Navs />

          <div className="row">
            <div className="col mb-3">
              <TagCards />
            </div>
            <div className="col mb-3">
              <TagCards />
            </div>
            <div className="col mb-3">
              <TagCards />
            </div>
            <div className="col mb-3">
              <TagCards />
            </div>
          </div>

        </div>
      </main>

    </>
  );
}
