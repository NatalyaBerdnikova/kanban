import React from "react";
import { CardGrid } from "@vkontakte/vkui";
import { useSelector } from "react-redux";

import DeskItem from "../DeskItem/DeskItem";

const DesksList = () => {
  const { desks } = useSelector((state) => state.desks);

  if (!desks.length) {
    return null;
  }

  return (
    <>
      <CardGrid size="l">
        {desks.map(({ id, name }) => (
          <DeskItem key={id} id={id}>
            {name}
          </DeskItem>
        ))}
      </CardGrid>
    </>
  );
};

export default DesksList;
