import clsx from 'clsx';
import Image from 'next/image';

import './hero.scss';

const HeroSection = () => {
  return (
    <section className="hero-section flex flex-col text-center overflow-hidden">
      <div className="relative flex flex-grow flex-col h-full z-10">
        <div className="m-auto flex items-center lg:items-center flex-col lg:flex-row">
          <div className="avatar relative -top-4 lg:-top-30">
            <div className="avatar-circle" />
            <div className="avatar-wrapper overflow-hidden">
              <Image
                src={'/profile-picture.png'}
                alt="profile"
                style={{
                  zIndex: 10
                }}
                fill
              />
            </div>
          </div>
          <div className="description text-left p-4 z-10 max-w-2xl ml-12">
            <h1
              className={clsx(
                'text-indigo-100 text-6xl sm:text-8xl font-bold uppercase font-josefin'
              )}
            >
              Fabien Liegard
            </h1>
            <p className="text-indigo-50 leading-loose font-roboto font-thin text-4xl">
              Web developer
            </p>
          </div>
        </div>
        <div className="text-white p-4 flex justify-center">
          <div className="menu-item px-4 py-8 font-roboto font-thin text-4xl">
            <a href="#about">About</a>
          </div>
          <div className="menu-item px-4 py-8 font-roboto font-thin text-4xl">
            |
          </div>
          <div className="menu-item px-4 py-8 font-roboto font-thin text-4xl">
            <a href="#skills">Skills</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
