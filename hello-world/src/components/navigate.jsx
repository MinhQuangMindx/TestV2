import { Router, Route, Routes } from "react-router-dom";
import Home from "../PAGE/home";

const Navigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Navigate;
