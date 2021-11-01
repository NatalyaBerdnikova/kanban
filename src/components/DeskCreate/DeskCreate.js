import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import CreateForm from "../CreateForm/CreateForm";
import { createDesk } from "../../actions/index";
import { addDesk } from "../../actions/actions";

const DeskCreate = () => {
  const dispatch = useDispatch();
  const { addDesk } = useContext(Context);

  const createItem = (name) => {
    return createDesk(name)
      .then((doc) => dispatch(addDesk({ id: doc.id, name })))
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
