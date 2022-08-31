import React, { Component } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import './footer.css'


class Footer extends Component {
  render() {
    return (
      <footer>
           <div className="social">
          <a
            className="social-github"
            href="https://github.com/aldobarrios81"
            target="blank"
          >
            <GitHub
              color="primary"
              fontSize="large"
              className="social-icons"
            />
          </a>
          <a
            className="social-linkedin"
            href="https://www.linkedin.com/in/aldobarrios81"
            target="blank"
          >
            <LinkedIn
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
        </div>

        <div className="copyright">
          © 2022 Copyright
          <a href="https://aldobarrios81.dev" target="blank">
            {" "}
            Aldo Barrios Vazquez
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
