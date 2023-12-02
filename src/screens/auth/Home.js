import React from "react";

//component
import LeftSection from "../../components/Home/LeftSection";
import RightSection from "../../components/Home/RightSection";

const Home = () => {
  return (
    <div className="home_container">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Home;
