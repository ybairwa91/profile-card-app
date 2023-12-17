// import { useState } from "react";
import React from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <Intro />
        <div className="data">
          <SkillList name="Html and css" />
        </div>
      </div>
    </>
  );
}

export default App;
