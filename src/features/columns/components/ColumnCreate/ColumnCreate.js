import React from "react";
import { Div } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useDispatch, useSelector } from "react-redux";

import ColumnCreateForm from "./ColumnCreateForm";
import "./ColumnCreate";
import { createColumn } from "../../actions";
import { getDesks } from "../../../desks/selectors";

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const desks = useSelector(getDesks);
  const {
    route: {
      params: { deskId },
    },
  } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  const createItem = (name) => dispatch(createColumn(name, deskId));

  return (
    <Div className="column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default ColumnCreate;
