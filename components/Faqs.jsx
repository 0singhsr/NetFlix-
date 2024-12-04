import React, { useState } from "react";
import "./Faqs.css"; // Styles for Faqs

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of TV shows, movies, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      question: "How much does Netflix cost?",
      answer: "Plans range from ₹149 to ₹649 per month. No extra charges.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    },
  ];

  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq__item ${activeIndex === index ? "active" : ""}`}
        >
          <button
            type="button"
            className="collapsible"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>
          <div
            className="content"
            style={{
              maxHeight: activeIndex === index ? "200px" : "0",
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}

<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  }}
>
  <button
    style={{
      backgroundColor: 'red',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
    }}
  >
    Join Now 
  </button>
  <span style={{ marginTop: '10px' }}>Create or restart your membership</span>
</div>

    </div>
  );
};

export default Faqs;
