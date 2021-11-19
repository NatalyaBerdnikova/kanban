import React, { useCallback, memo } from "react";
import { Div } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useDispatch } from "react-redux";

import ColumnCreateForm from "./ColumnCreateForm";
import "./ColumnCreate";
import { createColumn } from "../../actions";

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const {
    route: {
      params: { deskId },
    },
  } = useRoute();
  const createItem = useCallback(
    (name) => dispatch(createColumn(name, deskId)),
    [deskId, dispatch]
  );

  return (
    <Div className="column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default memo(ColumnCreate);
