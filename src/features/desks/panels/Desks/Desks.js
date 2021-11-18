import React, { memo } from "react";
import { PanelHeader, Div } from "@vkontakte/vkui";

import DesksList from "../../components/DesksList/DesksList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";

const Desks = () => {
  return (
    <>
      <PanelHeader>My desks</PanelHeader>
      <Div>
        <DeskCreate />
      </Div>
      <DesksList />
    </>
  );
};

export default memo(Desks);
