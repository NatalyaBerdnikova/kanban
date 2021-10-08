import React, { useEffect, useContext } from "react";
import { CardGrid } from "@vkontakte/vkui";

import DeskItem from "../DeskItem/DeskItem";
import { getDesks } from "../../actions/index";
import Context from "../App/context";

const DesksList = () => {
  const { setDesks, desks } = useContext(Context);

  useEffect(() => {
    getDesks().then(setDesks);
  }, []);

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
