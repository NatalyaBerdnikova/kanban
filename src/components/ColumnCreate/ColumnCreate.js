import React, { useContext } from "react";
import { Div } from "@vkontakte/vkui";

import ColumnCreateForm from "./ColumnCreateForm";
import "./ColumnCreate";
import { createColumn } from "../../actions/index";
import Context from "../App/context";

const ColumnCreate = () => {
  const { addColumn, activeDesk } = useContext(Context);

  const createItem = (name) => {
    return createColumn(name, activeDesk.id)
      .then((doc) => addColumn({ id: doc.id, name }))
      .catch((e) => console.log(e));
  };

  return (
    <Div className="column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default ColumnCreate;
