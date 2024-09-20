import React, { useState } from 'react';
import styles from './Feedback.module.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback('');
    alert('Thank you for your feedback!'); // Optional alert for user feedback
  };

  return (
    <div className={styles.feedbackcontainer}>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">Your Feedback</label>
          <textarea
            id="feedback"
            className={`form-control ${styles.formControl}`}
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
