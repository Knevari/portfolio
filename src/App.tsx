import Footer from "./components/footer";
import Stars from "./components/stars";
import StarryText from "./components/starry-text";
import Trailer from "./components/trailer";

function App() {
  return (
    <>
      <section className="min-h-screen">
        <Stars />
        <Trailer />
        <div className="container mx-auto z-10 translate-x-0 relative min-h-screen">
          <h1 className="text-7xl lg:text-[180px] font-bold leading-relaxed text-white">
            Knevari
          </h1>
          <p className="text-lg sm:text-5xl font-bold leading-tight max-w-5xl pointer-events-none text-white">
            Hey! I'm a web developer. I like music, programming,{" "}
            <StarryText>stars</StarryText> and cats 🐱
          </p>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default App;
