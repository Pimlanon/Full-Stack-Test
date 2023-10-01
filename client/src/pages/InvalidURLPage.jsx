import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import InvalidURL from "../components/InvalidURLs/InvalidURL";

function InvalidURLPage() {
  const navigateTo = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateTo("/users");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigateTo]);

  const linkToScanPage = () => {
    navigateTo("/users");
  };

  return <InvalidURL linkToScanPage={linkToScanPage} />;
}

export default InvalidURLPage;
