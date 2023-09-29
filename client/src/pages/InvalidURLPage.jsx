import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function InvalidURLPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/users");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Invalid URL</h1>
      <p>
        The URL you entered is invalid. You will be redirected back in 5
        seconds.
      </p>
    </div>
  );
}

export default InvalidURLPage;
