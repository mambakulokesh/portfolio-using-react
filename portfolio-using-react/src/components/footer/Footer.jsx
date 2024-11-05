import "./Footer.css";
function Footer() {
  return (
    <footer className="bg-body-dark text-center pt-5">
      <hr className="text-white pt-3" />
      <div className="container p-3 footer">
        <a
          className="foot-links text-white m-2"
          style={{ backgroundColor: "#dd4b39" }}
          href="/"
        >
          <i className="bi bi-house-fill"></i>
        </a>

        <a
          className="foot-links text-white m-2"
          style={{ backgroundColor: "#55acee" }}
          href="https://twitter.com/i/flow/signup"
        >
          <i className="bi bi-twitter"></i>
        </a>

        <a
          className="foot-links text-white m-2"
          style={{ backgroundColor: "#ac2bac" }}
          href=""
        >
          <i className="bi bi-instagram"></i>
        </a>

        <a
          className="foot-links text-white m-2"
          style={{ backgroundColor: "#0082ca" }}
          href="https://www.linkedin.com/in/lokesh-mambaku-23640924b/"
        >
          <i className="bi bi-linkedin"></i>
        </a>

        <a
          className="foot-links text-white m-2"
          style={{ backgroundColor: "#333333" }}
          href="https://github.com/mambakulokesh"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>

      <div
        className="text-center text-white py-3 mt-4 foot-desc"
        style={{ backgroundColor: "black" }}
      >
        © 2024 Copyright : &nbsp;
        <a
          className="text-white"
          href="https://unsplash.com/"
          style={{ textDecoration: "none" }}
        >
          This Website made with Love ❤️
        </a>
      </div>
    </footer>
  );
}

export default Footer;
