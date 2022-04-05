import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Section } from "@cmp/ui/Section";
import { Table } from "@cmp/table/Table";
import { getContactsState } from "@src/toolkit/index";
import { RoundButton } from "@cmp/ui/RoundButton";
import { Modal } from "@cmp/Modal/Modal";
import { Form } from "@cmp/form/Form";
import { InputTextForm } from "@cmp/form/InputTextForm";
import { Button } from "@cmp/ui/Button";
import { useDispatch } from "react-redux";
import { setValueContacts } from "@src/toolkit/slice/contacts";

const Items = styled.div`
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
  width: 100%;
`;

const Contacts = () => {
  const { contacts } = useSelector(getContactsState);
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  function getValue(value, key) {
    dispatch(setValueContacts({ value, key }));
  }

  function testings2(value) {
    console.log("value");
  }
  return (
    <>
      <Section title="Контакты">
        <Modal active={modalActive} setActive={setModalActive}>
          <Section title="Создать контакт">
            <Form>
              <InputTextForm handleChange={getValue} labelId="title" text="Контакт" />
              <InputTextForm handleChange={getValue} labelId="text" text="Описание" />
              <InputTextForm handleChange={getValue} labelId="description" text="Заметка" />
              <Button title="Cоздать контакт" size="20px 0" handleClick={testings2} />
            </Form>
          </Section>
        </Modal>
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
