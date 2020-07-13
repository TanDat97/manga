import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar-container" style={{display: props.showBox ? "block" : "none"}}>
      <aside id="sidebar-box" className="sidebar">
        <button onClick={() => props.handleChangeShowBox(false)}>
          aaa
        </button>
      </aside>
    </div>
    
  );
}

export default Sidebar;
