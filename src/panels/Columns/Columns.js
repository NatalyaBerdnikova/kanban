import React, { useEffect } from "react";
import { PanelHeader, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useRouter } from "react-router5";
import { useSelector, useDispatch } from "react-redux";

import "./Columns.css";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import Column from "../../components/Column/Column";
import { getColumns } from "../../api/index";
import { setColumns, setActivePanel } from "../../actions/actions";
import { pages } from "../../router";

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const desks = useSelector((state) => state.desks);

  const router = useRouter();
  const {
    route: {
      params: { deskId },
    },
  } = useRoute();
  const goToDesks = () => dispatch(setActivePanel(pages.DESKS));
  const desk = desks.find(({ id }) => id === deskId) || {};

  // Request to DataBase for columns
  useEffect(() => {
    if (desk.id) {
      getColumns(desk.id).then((columns) => dispatch(setColumns(columns)));
    }
  }, [desk]);

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
