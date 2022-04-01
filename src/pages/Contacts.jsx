import React from "react";
import { Section } from "@cmp/ui/Section";
import { Table } from "@cmp/table/Table";

const Contacts = () => {
  return (
    <>
      <Section title="Контакты">
        <Table titleText="Контакты" titleButton="Удалить" text="Номер" description="Описание" />
      </Section>
    </>
  );
};

export { Contacts };
