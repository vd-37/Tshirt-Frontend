import React from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";

const UserDashboard = () => {
  return (
    <Base title="Hello user," description="This is still a work in progress.">
      <h3>
      All good things take time. While our team works on this, take a look at our awesome Tshirt collection <Link to="/">here.</Link></h3>
    </Base>
  );
};

export default UserDashboard;
