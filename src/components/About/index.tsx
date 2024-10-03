import './about.scss';

const About = () => {
  return (
    <section id="about" className="about-section flex py-52 px-4">
      <div
        className="flex flex-col w-full text-white text-center items-center"
        style={{ flexGrow: 1 }}
      >
        <div className="title">
          <h2 className="text-8xl font-josefin text-blueLight mb-10">
            About me
          </h2>
        </div>
        <div className="description max-w-2xl text-xl">
          <p className="mb-12">
            Starting my career as a UI/UX designer, I developed a deep interest
            in the process of crafting seamless user interfaces. This curiosity
            led me into the world of web development, where I became fascinated
            by the technologies that bring designs to life. Over time, I
            transitioned from designing interfaces to building dynamic and
            performant web applications.
          </p>
          <p>
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
