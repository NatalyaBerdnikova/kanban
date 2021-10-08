import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { CardGrid, Div } from "@vkontakte/vkui";

import Card from "../Card/Card";
import CardCreate from "../CardCreate/CardCreate";
import "./Cards.css";
import { getCards } from "../../actions/index";
import Context from "../../components/App/context";

const Cards = ({ columnId }) => {
  const { cards, setCards } = useContext(Context);

  useEffect(() => {
    getCards(columnId).then((data) => setCards(data));
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
