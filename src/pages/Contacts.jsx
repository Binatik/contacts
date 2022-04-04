import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Section } from "@cmp/ui/Section";
import { Table } from "@cmp/table/Table";
import { getContactsState } from "@src/toolkit/index";
import { RoundButton } from "@cmp/ui/RoundButton";
import { Modal } from "@cmp/Modal/Modal";

const Items = styled.div`
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
  width: 100%;
`;

const Contacts = () => {
  const { contacts } = useSelector(getContactsState);
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Section title="Контакты">
        <Modal active={modalActive} setActive={setModalActive}>В разработке</Modal>
        <RoundButton modalActive={modalActive} buttonSize="50px" handleClick={setModalActive} argument={!modalActive} />
        <Items>
          {contacts.length === 0 && <h2>Нету контактов.</h2>}
          {contacts.map(({ id, titleText, text, description }) => (
            <Table key={id} argument={id} titleText={titleText} text={text} description={description} />
          ))}
        </Items>
      </Section>
    </>
  );
};

export { Contacts };
