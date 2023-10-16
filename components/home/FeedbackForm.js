import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendFeedback = async () => {
    if (!name || (!email && !phone)) {
      setErrorMessage('Name is required, and either email or phone must be provided.');
      return;
    }

    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        alert('Feedback sent successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error('Failed to send feedback');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending feedback. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button onClick={sendFeedback}>Submit</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
