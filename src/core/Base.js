import React from "react";
import Menu from "./Menu";
import { Twitter as TwitterIcon } from "@material-ui/icons";
import { Facebook as FacebookIcon } from "@material-ui/icons";
import { Instagram as InstagramIcon } from "@material-ui/icons";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "text-dark p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-light text-dark text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer class="p-4">
        <div className="icons m-2">
          <InstagramIcon className="m-2"/>
          <TwitterIcon className="m-2"/>
          <FacebookIcon className="m-2"/>
        </div>
        <p>© 2022 Wrog-X clothing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Base;
