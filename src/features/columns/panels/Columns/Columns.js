import React, { useEffect, useCallback, memo } from "react";
import { PanelHeader, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useSelector, useDispatch } from "react-redux";

import "./Columns.css";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import Column from "../../components/Column/Column";
import { fetchColumns } from "../../actions";
import { getColumns } from "../../selectors";
import { getDesks } from "../../../desks/selectors";
import { goBack } from "../../../../app/actions";

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const desks = useSelector(getDesks);

  const {
    route: {
      params: { deskId },
    },
  } = useRoute();
  const goToDesks = useCallback(() => dispatch(goBack()), [dispatch]);
  const desk = desks.find(({ id }) => id === deskId) || {};

  // Запрос в базу данных за колонками
  useEffect(() => {
    dispatch(fetchColumns(deskId));
  }, [dispatch, deskId]);

  return (
    <>
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks} />}>
        Desk "{desk.name ? `${desk.name}` : ""}"
      </PanelHeader>

      <Gallery className="columns__list" slideWidth="85%" align="left">
        {columns.map(({ id, name }) => (
          <Column key={id} name={name} id={id} />
        ))}

        <ColumnCreate />
      </Gallery>
    </>
  );
};

export default memo(Columns);
