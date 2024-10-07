'use client';

import clsx from 'clsx';
import Image from 'next/image';

import './hero.scss';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <section className="hero-section flex flex-col text-center overflow-hidden z-10">
      <div className="relative flex flex-grow flex-col h-full z-10">
        <div className="m-auto flex items-center lg:items-center flex-col lg:flex-row">
          <div className="avatar relative -top-4 lg:-top-30">
            <div className={clsx('avatar-circle', loaded && 'loaded')} />
            <div
              className={clsx(
                'avatar-wrapper overflow-hidden',
                loaded && 'loaded'
              )}
            >
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
          <div
            className={clsx(
              'hero-description text-left p-4 z-10 max-w-2xl ml-12',
              loaded && 'loaded'
            )}
          >
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
