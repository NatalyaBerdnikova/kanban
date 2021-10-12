import React, { useContext } from "react";
import { Div } from "@vkontakte/vkui";
import { useRoute } from "react-router5";

import ColumnCreateForm from "./ColumnCreateForm";
import "./ColumnCreate";
import { createColumn } from "../../actions/index";
import Context from "../App/context";

const ColumnCreate = () => {
  const { desks, addColumn } = useContext(Context);
  const {
    route: {
      params: { deskId },
    },
  } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  const createItem = (name) => {
    return createColumn(name, desk.id)
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
