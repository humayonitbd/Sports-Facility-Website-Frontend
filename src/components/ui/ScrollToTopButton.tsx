import  { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "200px",
          right: "100px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "49%",
          padding: "15px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
