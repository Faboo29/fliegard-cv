import HeroBackground from "@/components/HeroBackground";

export const Home = () => {
  return (
    <main>
      <section className="flex flex-col text-center overflow-hidden">
        <HeroBackground />
        <div className="relative flex flex-col h-screen z-10 pointer-events-none">
          <div className="m-auto">
            <h1 className="text-indigo-100 text-6xl">Fabien Liegard</h1>
            <p className="text-indigo-50 leading-loose text-2xl">
              Web developer
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
