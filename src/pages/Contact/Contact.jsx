import { useForm, ValidationError } from "@formspree/react";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
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
  const [state, handleSubmit, reset] = useForm("xwlpbvnk");

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

            {state.succeeded ? (
              <div className="form-success-box" role="status" aria-live="polite">
                <div className="form-success-icon">
                  <CheckCircle2 size={30} />
                </div>
                <h3>Message Sent</h3>
                <p>
                  Thank you for reaching out. We have received your message and
                  our team will get back to you shortly.
                </p>
                <button
                  type="button"
                  className="form-reset-btn"
                  onClick={reset}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                aria-busy={state.submitting}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="form-error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="form-error"
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
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="form-error"
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
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                      className="form-error"
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
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="form-error"
                  />
                </div>

                <ValidationError
                  errors={state.errors}
                  className="form-error form-error-general"
                  role="alert"
                />

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={state.submitting}
                >
                  <span>
                    {state.submitting ? "Sending..." : "Send Message"}
                  </span>
                  <span className="submit-arrow">↗</span>
                </button>
              </form>
            )}
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
            <iframe
              title="REVA University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.704004195485!2d77.62794088885501!3d13.117928400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20University!5e0!3m2!1sen!2sin!4v1790213252540!5m2!1sen!2sin"
              referrerPolicy="no-referrer-when-downgrade"
            />

           

            <div className="map-location-marker" aria-hidden="true">
              <span>
                <MapPin size={18} strokeWidth={2.5} />
              </span>
            </div>

            <a
              className="map-open-link"
              href="https://www.google.com/maps/search/?api=1&query=REVA%20University"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={16} />
              <span>Open in Maps</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
</div>
        
      </section>
    </main>
  );
}

export default Contact;