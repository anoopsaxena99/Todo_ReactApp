import React from "react";

export const Footer = () => {
  let footerstyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center mg-3">CopyRight &copy; AnoopTodo.com</p>
    </footer>
  );
};
