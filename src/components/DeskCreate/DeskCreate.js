import React, { useContext } from "react";

import CreateForm from "../CreateForm/CreateForm";
import { createDesk } from "../../actions/index";
import Context from "../App/context";

const DeskCreate = () => {
  const { addDesk } = useContext(Context);

  const createItem = (name) => {
    return createDesk(name)
      .then((doc) => addDesk({ id: doc.id, name }))
      .catch((error) => console.log(error));
  };

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Enter desk's name"
      actionTitle="Create a desk"
    />
  );
};

export default DeskCreate;
