import React from 'react';

const Features = () => {
    const featuresList = [
        {
            title: 'Wide Selection of Software',
            description: 'Choose from a vast array of software products across various categories to meet your needs.'
        },
        {
            title: 'Competitive Pricing',
            description: 'Get the best deals on software with our competitive pricing and exclusive discounts.'
        },
        {
            title: 'Secure Transactions',
            description: 'Enjoy peace of mind with our secure payment processing and data protection measures.'
        },
        {
            title: '24/7 Customer Support',
            description: 'Our dedicated support team is available around the clock to assist you with any inquiries.'
        },
        {
            title: 'Easy Returns',
            description: 'If you’re not satisfied, our hassle-free return policy makes it easy to get your money back.'
        }
    ];

    return (
        <section className="features">
            <h2>Key Features</h2>
            <div className="features-list">
                {featuresList.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;