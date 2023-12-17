import React from "react";
import Skill from "./skill";

export default function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Html and Css" emoji="🤠" color="pink" />
      <Skill skill="javascript" emoji="🤠" color="blue"/>
      <Skill skill="React" emoji="🤠" color="yellow" />
      <Skill skill="Bootstrap and tailwind" emoji="🤠" color="orange"/>
    </div>
  );
}
