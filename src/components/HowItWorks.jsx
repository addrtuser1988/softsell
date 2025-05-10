const steps = [
  {
    icon: "📤",
    title: "Upload License",
    desc: "Submit your unused software license details securely."
  },
  {
    icon: "💰",
    title: "Get Valuation",
    desc: "Receive a fair market quote within 24 hours."
  },
  {
    icon: "🏦",
    title: "Get Paid",
    desc: "Accept the offer and get paid instantly."
  }
];

const HowItWorks = () => (
  <section className="how-it-works" id="how">
    <div className="container">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, idx) => (
          <div className="step" key={idx}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;