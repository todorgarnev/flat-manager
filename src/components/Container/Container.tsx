import React, { Component, FunctionComponent, ReactElement } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: Component | ReactElement;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;