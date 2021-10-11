import React, { useContext, useEffect } from "react";
import { PanelHeader, Gallery, PanelHeaderBack } from "@vkontakte/vkui";

import "./Columns.css";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import Column from "../../components/Column/Column";
import { getColumns } from "../../actions/index";
import Context from "../../components/App/context";

const Columns = () => {
  useEffect(() => {
    getColumns(activeDesk).then((data) => setColumns(data));
  }, []);
  const { goToDesks, setColumns, columns, activeDesk } = useContext(Context);

  return (
    <>
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks} />}>
        Desk "{activeDesk.name}"
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
