function FAQ() {
  const faqs = [
    { q: "How accurate are the recommendations?", a: "This prototype uses heuristics; consider it a planning aid, not a guarantee."
    },
    { q: "Can I export data?", a: "Not yet — but CSV export and API endpoints are planned features."
    },
    { q: "How do you determine market demand?", a: "Market heuristics are currently simulated; we'll add real market signals later."
    }
  ];

  return (
    <section className="faq">
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <details key={i} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
