import { ArrowRight, Factory, Leaf, Target } from "lucide-react";
import { Link } from "react-router-dom";

import "./About.css";

const values = [
  {
    icon: <Factory size={24} />,
    title: "Precision Manufacturing",
    text: "A detail-focused approach to engineering and production, from concept to final inspection.",
  },
  {
    icon: <Target size={24} />,
    title: "Customer Focus",
    text: "We keep real-world drivers at the centre of the products and experiences we build.",
  },
  {
    icon: <Leaf size={24} />,
    title: "Future Ready",
    text: "We continuously explore smarter, cleaner, and more responsible approaches to mobility.",
  },
];

function About() {
  return (
    <div className="about-page">
      {/* Banner with clearly visible full white car */}
      <section className="about-banner">
        <div className="container about-banner-inner">
          <div className="about-eyebrow">ABOUT US</div>
          <h1>BUILDING THE FUTURE OF MOBILITY.</h1>
          <p>
            A modern car manufacturing vision shaped by engineering,
            innovation, precision, and people.
          </p>
        </div>
      </section>

      {/* Merged Who We Are & Structured Red Car Image Section */}
      <section className="section-space about-who">
        <div className="container about-who-grid">
          <div className="about-who-content">
            <p className="section-kicker">WHO WE ARE</p>
            <h2>More than manufacturing. We create possibilities.</h2>
            <div className="about-story-copy">
              <p>
                Car Manufacturing is built around a simple idea: vehicles should
                combine purposeful design, dependable engineering, modern
                technology, and an enjoyable driving experience.
              </p>
              <p>
                Our approach connects the complete automotive journey — from
                ideas and engineering to manufacturing, quality, and customer
                experience.
              </p>
            </div>
          </div>

          <div className="about-who-image-card">
            <div
              className="about-who-image"
              role="img"
              aria-label="Automotive manufacturing and engineering"
            >
              <div className="about-image-badge">
                <span className="image-badge-dot" />
                <span>PRECISION ENGINEERING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-space about-values">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">WHAT WE STAND FOR</p>
            <h2>Driven by purpose.</h2>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card hover-lift" key={value.title}>
                <div className="about-value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section with reduced spacing */}
      <section className="section-space about-mission">
        <div className="container about-mission-grid">
          <div>
            <p className="section-kicker">OUR MISSION</p>
            <h2>Engineer vehicles people can trust.</h2>
          </div>
          <div>
            <p>
              We aim to develop automotive solutions that bring together
              thoughtful design, engineering discipline, safety, and
              technology while staying focused on the needs of tomorrow.
            </p>
            <Link to="/services" className="text-link">
              See our services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-space about-cta">
        <div className="container">
          <p className="section-kicker">EXPLORE THE EXPERIENCE</p>
          <h2>See what we are building.</h2>
          <div className="about-cta-actions">
            <Link to="/gallery" className="home-button home-button-primary">
              View Gallery <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="home-button home-button-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

<<<<<<< HEAD
export default About;
=======
export default About;

>>>>>>> master
