import React from "react";
import { Button } from "@cmp/ui/Button";

const Form = ({children, ...props}) => {
  return (
    <>
    {children}
    <Button buttonTitle="Cоздать контакт" size="20px 0" {...props} />
    </>
  );
};

export { Form };
