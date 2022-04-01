import React from "react";
import { Card } from "./Card";

const Table = ({ titleText, titleButton, text, description }) => {
  return (
    <>
      <Card titleText={titleText} titleButton={titleButton} text={text} description={description} />
      <Card titleText={titleText} titleButton={titleButton} text={text} description={description} />
      <Card titleText={titleText} titleButton={titleButton} text={text} description={description} />
      <Card titleText={titleText} titleButton={titleButton} text={text} description={description} />
      <Card titleText={titleText} titleButton={titleButton} text={text} description={description} />
      <Card titleText={titleText} titleButton={titleButton} text={text} description={description} />
    </>
  );
};

export { Table };
