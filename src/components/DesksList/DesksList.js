import React, { useEffect } from "react";
import { CardGrid } from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";

import DeskItem from "../DeskItem/DeskItem";
import { getDesks } from "../../api/index";
import { setDesks } from "../../actions/actions";

const DesksList = () => {
  const dispatch = useDispatch();
  const desks = useSelector((state) => state.desks);

  // Запрос в базу данных за досками
  useEffect(() => {
    getDesks().then((desks) => dispatch(setDesks(desks)));
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
