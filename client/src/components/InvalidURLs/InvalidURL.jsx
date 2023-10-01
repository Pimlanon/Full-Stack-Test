import PropTypes from "prop-types";
import { Container } from "./InvalidURL.styled";

function InvalidURL({ linkToScanPage }) {
  return (
    <Container>
      <p>Error: Invalid URL. Redirecting to homepage in 5 seconds....</p>
      <p>
        If you do not want to visit that page, you can &nbsp;
        <a onClick={linkToScanPage}>return to the previous page</a>
      </p>
    </Container>
  );
}

InvalidURL.propTypes = {
  linkToScanPage: PropTypes.func.isRequired,
};

export default InvalidURL;
