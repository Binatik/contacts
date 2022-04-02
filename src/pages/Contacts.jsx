import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Section } from "@cmp/ui/Section";
import { Table } from "@cmp/table/Table";
import { fetchContacts } from "@src/toolkit/slice/contacts";
import { getContactsState } from "@src/toolkit/index";

const Contacts = () => {
  const { contacts } = useSelector(getContactsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  return (
    <>
      <Section title="Контакты">
        {contacts.length === 0 && <h2>Нету контактов.</h2>}
        {contacts.map(({id, titleText, titleButton, text, description }) => (
          <Table key={id} id={id} titleText={titleText} titleButton={titleButton} text={text} description={description} />
        ))}
      </Section>
    </>
  );
};

export { Contacts };
