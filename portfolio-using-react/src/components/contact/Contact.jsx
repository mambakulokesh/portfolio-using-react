import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="fs-6 text-center">Get in Touch</p>
        <h1 className="text-center mb-5">CONTACT</h1>

        <div className="row">
          <div className="col-md-5 mx-auto" id="contact-container">
            <div className="contact-card animate-fade-in">
              <i className="bi bi-phone-fill contact-icon"></i>
              <span>+91 75699XXXXX</span>
            </div>

            <div
              className="contact-card animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <i className="bi bi-envelope-fill contact-icon"></i>
              <span>mambakulokesh4756@gmail.com</span>
            </div>

            <div
              className="contact-card animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <i className="bi bi-geo-alt-fill contact-icon"></i>
              <span>Hyderabad, Telengana</span>
            </div>
          </div>

          <div className="col-md-7">
            <div
              className="container contact-form animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="form-box">
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
                  <button
                    type="submit"
                    className="submit-btn mt-2"
                    style={{ animationDelay: "0.8s" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
