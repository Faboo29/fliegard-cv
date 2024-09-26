import HeroBackground from "@/components/HeroBackground";
import Image from "next/image";
import { Josefin_Sans, Roboto } from "next/font/google";

import "./home.scss";
import clsx from "clsx";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const Home = () => {
  return (
    <main className={clsx(roboto.className)}>
      <HeroBackground />
      <section className="flex flex-col text-center overflow-hidden">
        <div className="relative flex flex-col h-screen z-10">
          <div className="m-auto flex flex-nowrap items-center">
            <div className="avatar relative -top-28">
              <div className="avatar-circle" />
              <div
                className="avatar-wrapper overflow-hidden"
                style={{
                  borderRadius: "10000px",
                  boxShadow: "inset -2px -3px 11px 5px rgba(5,12,38,0.56)",
                  width: "400px",
                  height: "400px",
                  position: "relative",
                  border: "16px solid #060d15",
                }}
              >
                <Image
                  src={"/profile-picture.png"}
                  alt="profile"
                  style={{
                    zIndex: 10,
                  }}
                  fill
                />
              </div>
            </div>
            <div className="description text-left p-4 z-10 max-w-2xl">
              <h1
                className={clsx(
                  "text-indigo-100 text-7xl bold uppercase",
                  josefin.className
                )}
              >
                Fabien Liegard
              </h1>
              <p className="text-indigo-50 leading-loose text-4xl">
                Web developer
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex w-full h-screen">
          <div className="w-3/12 h-full backdrop-blur-sm p-8 pt-12 text-white theme-bg-gradient-1">
            Left Section
          </div>
          <div className="w-9/12">Right Section</div>
        </div>
      </section>
    </main>
  );
};

export default Home;
