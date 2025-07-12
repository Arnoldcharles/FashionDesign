// app/contact/page.jsx
import "../styles/contact.css";

export default function ContactPage() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        We'd love to hear from you — whether it's a custom request, feedback, or
        a booking inquiry.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xanjrrlr"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Social Links */}
        <div className="contact-socials">
          <h3>Connect with Us</h3>
          <ul>
            <li>
              <a href="https://instagram.com" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://wa.me/2340000000000" target="_blank">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank">
                Pinterest
              </a>
            </li>
            <li>
              <a href="mailto:arnoldcharles028@gmail.com">Email Us</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
