const testimonials = [
  {
    name: "Jane Doe",
    role: "IT Manager",
    company: "Acme Corp",
    review: "SoftSell made it so easy to sell our unused licenses. Fast, transparent, and great value!"
  },
  {
    name: "John Smith",
    role: "Procurement Lead",
    company: "BetaSoft",
    review: "Highly recommend SoftSell! The process was smooth and the support team was fantastic."
  }
];

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <div className="container">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((t, idx) => (
          <div className="testimonial" key={idx}>
            <p className="review">"{t.review}"</p>
            <p className="author">
              <strong>{t.name}</strong>, {t.role} at {t.company}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;