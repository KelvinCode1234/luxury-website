import React from "react";
import './Contact.css';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "439383d7-f2f8-4a00-8cf1-34a0b36f630e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="row">
        <div className="container-left">
          <h2 className="sub-title">Get in Touch</h2>
          <p><i className="fa-solid fa-envelope"></i> danuchebest11@gmail.com</p>
          <p><i className="fa-solid fa-square-phone"></i> +2348156998309</p>
          <p><i className="fa-solid fa-location-dot"></i> Unity road Oke-Afa Lagos.</p>
          <div className="social-icons">
            <a href="https://#"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://wa.me/+2348067982702"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="container-right">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="15" placeholder="Have a question about a car? Send a message!" required></textarea>

            <button type="submit" className="btn-2">Submit</button>
            <span>{result}</span>
          </form>
        </div>
      </div>
    </div>
  );
}
