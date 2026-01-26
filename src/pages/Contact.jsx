import { useState } from "react";
import "../style/Home.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("5");
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // For now, just show a success message. Integrate API later.
    setStatus({ type: "success", text: "Thanks — your message was sent." });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setRating("5");
  }

  return (
    <div className="page">
      <h1>Contact & Feedback</h1>
      <p className="subtitle">Reach out to Aditya or share feedback about the tool.</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: 720, margin: "20px auto" }}>
        <h2>Send a message</h2>

        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required />
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" rows={6} style={{ resize: 'vertical' }} required />

        <label style={{ display: 'block', margin: '10px 0 6px' }}>How was your experience?</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="5">Excellent</option>
          <option value="4">Good</option>
          <option value="3">Okay</option>
          <option value="2">Poor</option>
          <option value="1">Terrible</option>
        </select>

        <button type="submit">Send Feedback</button>

        {status && (
          <div className={status.type === 'success' ? 'result' : 'result'} style={{ marginTop: 18 }}>
            <p style={{ margin: 0 }}>{status.text}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
