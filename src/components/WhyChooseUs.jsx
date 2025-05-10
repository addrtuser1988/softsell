const reasons = [
  {
    icon: "⚡",
    title: "Fast Process",
    desc: "Get your quote and payment in record time."
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    desc: "Your data and transactions are always protected."
  },
  {
    icon: "💸",
    title: "Best Value",
    desc: "We offer top market rates for your licenses."
  },
  {
    icon: "🤝",
    title: "Trusted Support",
    desc: "Our team is here to help every step of the way."
  }
];

const WhyChooseUs = () => (
  <section className="why-choose-us" id="why">
    <div className="container">
      <h2>Why Choose Us</h2>
      <div className="reasons">
        {reasons.map((r, idx) => (
          <div className="reason" key={idx}>
            <div className="icon">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;