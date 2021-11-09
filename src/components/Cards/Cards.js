import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CardGrid, Div } from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Card/Card";
import CardCreate from "../CardCreate/CardCreate";
import "./Cards.css";
import { getCards } from "../../api/index";
import { setCards } from "../../actions/actions";

const Cards = ({ columnId }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    getCards(columnId).then((data) => dispatch(setCards(data)));
  }, []);

  return (
    <div>
      <CardGrid size="l">
        {cards.length > 0 ? (
          cards.map(({ id, name }) => (
            <Card key={id} id={id}>
              {name}
            </Card>
          ))
        ) : (
          <Div>You don't have cards yet :(</Div>
        )}
      </CardGrid>
      <div className="cards__creator">
        <CardCreate columnId={columnId} />
      </div>
    </div>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;
