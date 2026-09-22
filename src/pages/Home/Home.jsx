import { ArrowRight, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import "./Home.css";

const features = [
  {
    icon: <Sparkles size={24} />,
    title: "Innovation",
    text: "Smart engineering and modern technology built into every stage of vehicle development.",
  },
  {
    icon: <Gauge size={24} />,
    title: "Performance",
    text: "Precision-focused design that balances power, efficiency, comfort, and everyday usability.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Safety",
    text: "Safety-first thinking across design, manufacturing, testing, and the driving experience.",
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-overlay" />

        <div className="container home-hero-content">
          <p className="home-eyebrow">CAR MANUFACTURING</p>

          <h1>
            ENGINEERED
            <span>FOR THE FUTURE.</span>
          </h1>

          <p className="home-hero-text">
            Discover a new generation of automotive engineering where
            innovation, performance, precision, and safety come together.
          </p>

          <div className="home-hero-actions">
            <Link to="/gallery" className="home-button home-button-primary">
              Explore Our Cars
              <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="home-button home-button-secondary">
              Discover Us
            </Link>
          </div>
        </div>

        <div className="home-scroll-indicator">SCROLL TO EXPLORE</div>
      </section>

      <section className="home-intro section-space">
        <div className="container home-intro-grid">
          <div>
            <p className="section-kicker">BUILT WITH PURPOSE</p>
            <h2>Moving automotive design forward.</h2>
          </div>

          <div>
            <p className="home-intro-copy">
              We bring together engineering, technology, design, and
              manufacturing to create vehicles prepared for the changing
              needs of modern mobility.
            </p>

            <Link to="/about" className="text-link">
              Learn more about us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-features section-space">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">OUR APPROACH</p>
            <h2>What drives us.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card hover-lift" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-showcase">
        <div className="container showcase-grid">
          <div className="showcase-image" role="img" aria-label="Modern performance car" />
          <div className="showcase-content">
            <p className="section-kicker">THE NEXT GENERATION</p>
            <h2>Designed to make every journey matter.</h2>
            <p>
              From the first sketch to final quality checks, every detail is
              shaped around a simple goal: creating a better driving
              experience.
            </p>

            <Link to="/services" className="text-link">
              Explore our services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta section-space">
        <div className="container home-cta-inner">
          <p className="section-kicker">READY TO EXPLORE?</p>
          <h2>Find your next destination in our world of mobility.</h2>
          <Link to="/contact" className="home-button home-button-primary">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
























// function Home() {
//   return (
//     <section className="page">
//       <div className="container">
//         <h1>Home</h1>
//       </div>
//     </section>
//   );
// }

// export default Home;