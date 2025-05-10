import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  licenseType: "",
  message: ""
};

const licenseOptions = [
  "Microsoft Office",
  "Adobe Creative Cloud",
  "AutoCAD",
  "Other"
];

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.company) errs.company = "Company is required";
    if (!form.licenseType) errs.licenseType = "Select a license type";
    if (!form.message) errs.message = "Message is required";
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    } else {
      setErrors(errs);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        {submitted ? (
          <div className="thank-you">Thank you! We'll be in touch soon.</div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
            </div>
            <div className="form-row">
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
                {errors.company && <span className="error">{errors.company}</span>}
              </label>
              <label>
                License Type
                <select
                  name="licenseType"
                  value={form.licenseType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {licenseOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.licenseType && <span className="error">{errors.licenseType}</span>}
              </label>
            </div>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </label>
            <button type="submit" className="cta-btn">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;