import React, { useState, useEffect } from "react";
import { useRoute } from "react-router5";

import { pages } from "../../router";
import { apiGetDesks } from "../../actions";

const useColumnsState = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (column) => setColumns([...columns, column]);
  const removeColumn = (removeId) =>
    setColumns(columns.filter(({ id }) => id !== removeId));
  return { columns, setColumns, addColumn, removeColumn };
};

const useDesksState = () => {
  const [desks, setDesks] = useState([]);
  const addDesk = (desk) => setDesks([...desks, desk]);
  const removeDesk = (removeId) =>
    setDesks(desks.filter(({ id }) => id !== removeId));

  // Запрос в базу данных за досками
  useEffect(() => {
    apiGetDesks().then(setDesks);
  }, []);

  return { desks, setDesks, addDesk, removeDesk };
};

const useNavState = () => {
  const [activePanel, setActivePanel] = useState(null);

  const changeRoute = ({ route }) => {
    setActivePanel(route.name);
  };

  return { activePanel, changeRoute };
};

export const useCardsState = () => {
  const [cards, setCards] = useState([]);
  const addCard = (card) => setCards([...cards, card]);
  const removeCard = (removeId) =>
    setCards(cards.filter(({ id }) => removeId !== id));

  return { cards, setCards, addCard, removeCard };
};

const usePopoutState = () => {
  const [popout, setPopout] = useState(null);

  return { popout, setPopout };
};

export const useAppState = () => {
  const desksState = useDesksState();
  const columnsState = useColumnsState();
  const cardsState = useCardsState();
  const appState = useNavState();
  const popoutState = usePopoutState();

  return {
    ...desksState,
    ...columnsState,
    ...cardsState,
    ...appState,
    ...popoutState,
  };
};
