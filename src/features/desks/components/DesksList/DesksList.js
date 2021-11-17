import React, { useEffect } from "react";
import { CardGrid } from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";

import DeskItem from "../DeskItem/DeskItem";
import { fetchDesks } from "../../actions";
import { getDesks } from "../../selectors";

const DesksList = () => {
  const dispatch = useDispatch();
  const desks = useSelector(getDesks);

  useEffect(() => {
    dispatch(fetchDesks());
  }, [dispatch]);

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
