import React, { useEffect } from "react";
import { PanelHeader, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useSelector, useDispatch } from "react-redux";

import "./Columns.css";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import Column from "../../components/Column/Column";
import { fetchColumns } from "../../actions/actions";

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const desks = useSelector((state) => state.desks);

  const {
    route: {
      params: { deskId },
    },
  } = useRoute();
  const goToDesks = () => window.history.back();
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

export default Columns;
