import "./Contact.css";

const contactDetails = [
  {
    number: "01",
    title: "Visit Us",
    value: "123 Automotive Avenue, Industrial Park",
    link: "#",
  },
  {
    number: "02",
    title: "Call Us",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    number: "03",
    title: "Email Us",
    value: "info@autovista.com",
    link: "mailto:info@autovista.com",
  },
  {
    number: "04",
    title: "Working Hours",
    value: "Mon - Sat | 9:00 AM - 6:00 PM",
    link: "#",
  },
];

function Contact() {
  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-label">GET IN TOUCH</p>

          <h1>Contact Us</h1>

          <p>
            Have a question, project idea, or business enquiry? Our team is
            ready to connect with you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Content */}
          <div className="contact-info">
            <div className="contact-heading">
              <p className="section-label">LET'S CONNECT</p>

              <h2>We'd Love to Hear From You</h2>

              <p>
                Whether you are looking for more information about our
                vehicles, services, or manufacturing capabilities, get in
                touch with our team.
              </p>
            </div>

            <div className="contact-details">
              {contactDetails.map((detail) => (
                <div className="contact-detail" key={detail.number}>
                  <span className="contact-detail-number">
                    {detail.number}
                  </span>

                  <div>
                    <h3>{detail.title}</h3>

                    <a href={detail.link}>{detail.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <span>01</span>

              <h3>Send Us a Message</h3>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Message</span>
                <span className="submit-arrow">↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location-section">
        <div className="location-container">
          <div className="location-content">
            <p className="section-label">FIND US</p>

            <h2>Our Location</h2>

            <p>
              Visit our facility and experience our automotive environment
              first-hand.
            </p>
          </div>

          <div className="location-map">
            <div className="map-overlay">
              <span className="map-pin">●</span>

              <h3>AutoVista Manufacturing</h3>

              <p>Industrial Park, India</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;