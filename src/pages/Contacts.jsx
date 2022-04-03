import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Section } from "@cmp/ui/Section";
import { Table } from "@cmp/table/Table";
import { getContactsState } from "@src/toolkit/index";
import { RoundButton } from "@cmp/ui/RoundButton";

const Items = styled.div`
display: flex;
margin: 20px 0;
flex-wrap: wrap;
width: 100%;
`;

const Contacts = () => {
  const { contacts } = useSelector(getContactsState);

  return (
    <>
      <Section title="Контакты">
        <RoundButton buttonSize="50px" handleClick={console.log("ddd")} />
        <Items>
          {contacts.length === 0 && <h2>Нету контактов.</h2>}
          {contacts.map(({ id, titleText, text, description }) => (
            <Table key={id} id={id} titleText={titleText} text={text} description={description} />
          ))}
        </Items>
      </Section>
    </>
  );
};

export { Contacts };
