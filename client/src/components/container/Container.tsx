import React, { FunctionComponent } from "react";
import styles from "./Container.module.scss";

const Container: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;