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
import { useDispatch } from "react-redux";
import { setValueContacts, fetchCreateContact } from "@src/toolkit/slice/contacts";

const Items = styled.div`
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
  width: 100%;
`;

const Contacts = () => {
  const { contacts, form } = useSelector(getContactsState);
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  function isEmptyObject(obj) {
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) return false;
    }
    return true;
  }

  function getValue(...argument) {
    dispatch(setValueContacts({ ...argument }));
  }

  function createContact() {
    if (isEmptyObject(form)) {
      alert("поле пустое");
      return;
    }
    dispatch(fetchCreateContact());
    alert("Вы создали успешно новый контакт.");
  }

  return (
    <>
      <Section title="Контакты">
        <Modal active={modalActive} setActive={setModalActive}>
          <Section title="Создать контакт">
            <Form handleClick={createContact}>
              <InputTextForm handleChange={getValue} labelId="title" text="Контакт" />
              <InputTextForm handleChange={getValue} labelId="text" text="Описание" />
              <InputTextForm handleChange={getValue} labelId="description" text="Заметка" />
            </Form>
          </Section>
        </Modal>
        <RoundButton modalActive={modalActive} buttonSize="50px" handleClick={setModalActive} argument={!modalActive} />
        <Items>
          {contacts.length === 0 && <h2>Нету контактов.</h2>}
          {contacts.map(({ id, title, text, description }) => (
            <Table key={id} argument={id} title={title} text={text} description={description} />
          ))}
        </Items>
      </Section>
    </>
  );
};

export { Contacts };
