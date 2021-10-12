import React, { useContext, useEffect } from "react";
import { PanelHeader, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useRouter } from "react-router5";

import "./Columns.css";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import Column from "../../components/Column/Column";
import { getColumns } from "../../actions/index";
import Context from "../../components/App/context";
import { pages } from "../../router";

const Columns = () => {
  const router = useRouter();
  const { setColumns, columns, desks } = useContext(Context);
  const {
    route: {
      params: { deskId },
    },
  } = useRoute();
  const goToDesks = () => router.navigate(pages.DESKS);
  const desk = desks.find(({ id }) => id === deskId) || {};

  // Request to DataBase for columns
  useEffect(() => {
    if (desk.id) {
      getColumns(desk.id).then((data) => setColumns(data));
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
