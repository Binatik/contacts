import React from "react";
import { useSelector } from "react-redux";
import { Section } from "@cmp/ui/Section";
import { Table } from "@cmp/table/Table";
import { getContactState } from "@src/toolkit/index";

const Contacts = () => {
  const { data } = useSelector(getContactState);
  return (
    <>
      <Section title="Контакты">
        {data.map(({id, titleText, titleButton, text, description }) => (
          <Table key={id} id={id} titleText={titleText} titleButton={titleButton} text={text} description={description} />
        ))}
      </Section>
    </>
  );
};

export { Contacts };
