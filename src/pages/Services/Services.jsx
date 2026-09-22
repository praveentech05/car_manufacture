import "./Services.css";

const services = [
  {
    id: "01",
    title: "Vehicle Manufacturing",
    description:
      "Advanced manufacturing processes focused on precision, durability, safety, and consistent vehicle quality.",
  },
  {
    id: "02",
    title: "Automotive Design",
    description:
      "Modern vehicle design combining functionality, performance, comfort, and a distinctive visual identity.",
  },
  {
    id: "03",
    title: "Engineering & R&D",
    description:
      "Research and engineering solutions that improve vehicle performance, efficiency, reliability, and technology.",
  },
  {
    id: "04",
    title: "Quality & Testing",
    description:
      "Comprehensive testing and quality-control processes to ensure every vehicle meets demanding standards.",
  },
  {
    id: "05",
    title: "Custom Solutions",
    description:
      "Flexible automotive solutions designed around specific customer, business, and manufacturing requirements.",
  },
  {
    id: "06",
    title: "After-Sales Support",
    description:
      "Reliable maintenance, service, and customer support designed to provide long-term ownership confidence.",
  },
];

const strengths = [
  {
    number: "01",
    title: "Precision",
    description:
      "Attention to detail throughout every stage of design and manufacturing.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "Continuous improvement through modern automotive technology and engineering.",
  },
  {
    number: "03",
    title: "Quality",
    description:
      "Strong quality standards from initial design through final production.",
  },
  {
    number: "04",
    title: "Customer Focus",
    description:
      "Solutions and services built around customer expectations and requirements.",
  },
];

function Services() {
  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-content">
          <p className="services-label">WHAT WE DO</p>

          <h1>Services</h1>

          <p>
            Delivering innovative automotive solutions through engineering,
            manufacturing, technology, and dedicated customer support.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-heading">
            <p className="section-label">OUR EXPERTISE</p>

            <h2>Automotive Solutions Built Around You</h2>

            <p>
              From vehicle manufacturing to engineering and after-sales
              support, we provide services across the automotive lifecycle.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.id}>
                <span className="service-number">{service.id}</span>

                <div className="service-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="strengths-section">
        <div className="strengths-container">
          <div className="strengths-heading">
            <p className="section-label">OUR APPROACH</p>

            <h2>Driven by Quality</h2>

            <p>
              We combine engineering expertise, modern technology, and
              customer-focused thinking to create reliable automotive
              solutions.
            </p>
          </div>

          <div className="strengths-grid">
            {strengths.map((strength) => (
              <article className="strength-card" key={strength.number}>
                <span>{strength.number}</span>

                <h3>{strength.title}</h3>

                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;