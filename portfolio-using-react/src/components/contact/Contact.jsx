import "./Contact.css";

function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="container contact-form">
          {/* <div className="contact-form"> */}
          <div className="form-box">
            <h1 className="text-center mb-4">Get in Touch</h1>
            <form>
              <div className="input-box">
                <input type="text" required />
                <label>First Name</label>
              </div>
              <div className="input-box">
                <input type="text" required />
                <label>Last Name</label>
              </div>
              <div className="input-box">
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <input type="tel" required />
                <label>Mobile</label>
              </div>
              <div className="input-box">
                <textarea required></textarea>
                <label>Type Your Message Here...</label>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}

export default Contact;
