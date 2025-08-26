import React, { useEffect } from "react";

const NetflixSplash = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // tell App to hide splash and apply theme
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        color: "red",
        fontSize: "4rem",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      NETFLIX
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default NetflixSplash;



