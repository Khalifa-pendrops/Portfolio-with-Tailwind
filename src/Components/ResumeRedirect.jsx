import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResumeRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
    navigate("/");
  }, [navigate]);

  return null;
};

export default ResumeRedirect;
