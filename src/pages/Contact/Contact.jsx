import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  AlertCircle,
  Loader2,
} from "lucide-react";
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

const validateField = (name, value) => {
  const val = typeof value === "string" ? value.trim() : "";
  switch (name) {
    case "name":
      if (!val) return "Full name is required.";
      if (val.length < 2) return "Name must be at least 2 characters.";
      if (val.length > 60) return "Name cannot exceed 60 characters.";
      if (!/^[\p{L}\s.'-]+$/u.test(val)) {
        return "Name should only contain letters and spaces.";
      }
      return "";
    case "email":
      if (!val) return "Email address is required.";
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) {
        return "Please enter a valid email address (e.g. name@domain.com).";
      }
      return "";
    case "phone": {
      if (!val) return "Phone number is required.";
      const digits = val.replace(/\D/g, "");
      if (digits.length < 10) {
        return "Phone number must contain at least 10 digits.";
      }
      if (digits.length > 15) {
        return "Phone number cannot exceed 15 digits.";
      }
      if (!/^(\+?[0-9]{1,4}[\s-]?)?(\(?\d{2,4}\)?[\s-]?)?[\d\s-]{6,12}$/.test(val)) {
        return "Please enter a valid phone number format.";
      }
      return "";
    }
    case "subject":
      if (!val) return "Subject is required.";
      if (val.length < 3) return "Subject must be at least 3 characters.";
      if (val.length > 100) return "Subject cannot exceed 100 characters.";
      return "";
    case "message":
      if (!val) return "Message is required.";
      if (val.length < 15) return "Message must be at least 15 characters long.";
      if (val.length > 1000) return "Message cannot exceed 1000 characters.";
      return "";
    default:
      return "";
  }
};

function Contact() {
  const [state, handleSubmit, reset] = useForm("xwlpbvnk");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handlePhoneKeyDown = (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Home",
      "End",
      "Enter",
    ];

    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
      return;
    }

    const isDigit = /^[0-9]$/.test(e.key);
    const isPlus =
      e.key === "+" &&
      e.target.selectionStart === 0 &&
      !e.target.value.includes("+");
    const isSeparator = [" ", "-", "(", ")"].includes(e.key);

    if (!isDigit && !isPlus && !isSeparator) {
      e.preventDefault();
    }
  };

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    // Strip alphabets and disallowed characters
    val = val.replace(/[^0-9+\s\-()]/g, "");
    // Ensure '+' only appears once and at the start
    if (val.includes("+")) {
      const startsWithPlus = val.startsWith("+");
      val = (startsWithPlus ? "+" : "") + val.replace(/\+/g, "");
    }
    handleFieldChange("phone", val);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const fields = ["name", "email", "phone", "subject", "message"];
    const allTouched = {};
    const newErrors = {};
    let firstInvalid = null;

    fields.forEach((field) => {
      allTouched[field] = true;
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        if (!firstInvalid) firstInvalid = field;
      }
    });

    setTouched(allTouched);
    setErrors(newErrors);

    if (firstInvalid) {
      const el = document.getElementById(firstInvalid);
      if (el) {
        el.focus();
      }
      return;
    }

    await handleSubmit(e);
  };

  const handleReset = () => {
    reset();
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setTouched({});
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />

        <div className="container contact-hero-content">
          <div className="contact-eyebrow">GET IN TOUCH</div>

          <h1>CONTACT US</h1>

          <p className="contact-hero-desc">
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
                  onClick={handleReset}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={onFormSubmit}
                aria-busy={state.submitting}
                noValidate
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name <span className="required-star">*</span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      placeholder="Enter your name"
                      autoComplete="name"
                      maxLength={60}
                      className={
                        touched.name
                          ? errors.name
                            ? "input-invalid"
                            : "input-valid"
                          : ""
                      }
                      aria-invalid={touched.name && !!errors.name}
                      aria-describedby={
                        touched.name && errors.name ? "name-error" : undefined
                      }
                      required
                    />
                    {touched.name && errors.name && (
                      <p id="name-error" className="field-error-msg" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="form-error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required-star">*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="Enter your email"
                      autoComplete="email"
                      className={
                        touched.email
                          ? errors.email
                            ? "input-invalid"
                            : "input-valid"
                          : ""
                      }
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={
                        touched.email && errors.email ? "email-error" : undefined
                      }
                      required
                    />
                    {touched.email && errors.email && (
                      <p id="email-error" className="field-error-msg" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
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
                    <label htmlFor="phone">
                      Phone Number <span className="required-star">*</span>
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      inputMode="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onKeyDown={handlePhoneKeyDown}
                      onBlur={() => handleBlur("phone")}
                      placeholder="+91 98765 43210"
                      maxLength={20}
                      className={
                        touched.phone
                          ? errors.phone
                            ? "input-invalid"
                            : "input-valid"
                          : ""
                      }
                      aria-invalid={touched.phone && !!errors.phone}
                      aria-describedby={
                        touched.phone && errors.phone ? "phone-error" : undefined
                      }
                      required
                    />
                    {touched.phone && errors.phone && (
                      <p id="phone-error" className="field-error-msg" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="form-error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject <span className="required-star">*</span>
                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => handleFieldChange("subject", e.target.value)}
                      onBlur={() => handleBlur("subject")}
                      placeholder="Enter subject"
                      maxLength={100}
                      className={
                        touched.subject
                          ? errors.subject
                            ? "input-invalid"
                            : "input-valid"
                          : ""
                      }
                      aria-invalid={touched.subject && !!errors.subject}
                      aria-describedby={
                        touched.subject && errors.subject ? "subject-error" : undefined
                      }
                      required
                    />
                    {touched.subject && errors.subject && (
                      <p id="subject-error" className="field-error-msg" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                      className="form-error"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-group-header">
                    <label htmlFor="message">
                      Message <span className="required-star">*</span>
                    </label>
                    <span
                      className={`char-counter ${
                        formData.message.length > 900 ? "char-limit-near" : ""
                      }`}
                    >
                      {formData.message.length} / 1000
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={(e) => handleFieldChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="Tell us how we can help..."
                    maxLength={1000}
                    className={
                      touched.message
                        ? errors.message
                          ? "input-invalid"
                          : "input-valid"
                        : ""
                    }
                    aria-invalid={touched.message && !!errors.message}
                    aria-describedby={
                      touched.message && errors.message ? "message-error" : undefined
                    }
                    required
                  ></textarea>
                  {touched.message && errors.message && (
                    <p id="message-error" className="field-error-msg" role="alert">
                      <AlertCircle size={14} aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
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
                  <span className="contact-submit-label">
                    {state.submitting ? (
                      <>
                        <Loader2
                          size={18}
                          className="btn-spinner"
                          aria-hidden="true"
                        />
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                  {!state.submitting && (
                    <span className="submit-arrow" aria-hidden="true">
                      ↗
                    </span>
                  )}
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