'use client';

import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

import './about.scss';

const About = () => {
  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const animation = {
    start: 'opacity-0 -translate-y-12',
    end: 'opacity-100 translate-y-0'
  };

  return (
    <section
      id="about"
      className="about-section flex py-52 px-4 relative z-10"
      ref={ref}
    >
      <div
        className="flex flex-col w-full text-white text-center items-center"
        style={{ flexGrow: 1 }}
      >
        <div className="title">
          <h2
            className={clsx(
              'text-8xl font-josefin text-blueLight mb-10 transition duration-800 ease-out',
              animation.start,
              inView && animation.end
            )}
          >
            About me
          </h2>
        </div>
        <div className="description max-w-2xl text-xl">
          <p
            className={clsx(
              'mb-12 transition delay-300 duration-1000 ease-out',
              animation.start,
              inView && animation.end
            )}
          >
            Starting my career as a UI/UX designer, I developed a deep interest
            in the process of crafting seamless user interfaces. This curiosity
            led me into the world of web development, where I became fascinated
            by the technologies that bring designs to life. Over time, I
            transitioned from designing interfaces to building dynamic and
            performant web applications.
          </p>
          <p
            className={clsx(
              'mb-12 transition delay-500 duration-1000 ease-out',
              animation.start,
              inView && animation.end
            )}
          >
            Driven by a love for optimizing and improving systems, I continually
            explore new tools, technologies, and development patterns. I thrive
            on learning and implementing better solutions, always focused on
            enhancing application performance and code efficiency. With a strong
            background in front-end frameworks like React and Next.js, as well
            as full-stack experience with Node.js and GraphQL, I bring both a
            creative and analytical mindset to every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
