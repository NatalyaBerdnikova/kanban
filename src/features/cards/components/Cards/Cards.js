import React, { Fragment, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { CardGrid, Div } from "@vkontakte/vkui";

import ColumnCard from "../../../columns/components/ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import { fetchCards } from "../../actions";
import "./Cards.css";
import { getCards } from "../../selectors";

const Cards = ({ columnId }) => {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  // Запрос в базу данных за карточками
  useEffect(() => {
    dispatch(fetchCards(columnId));
  }, [dispatch, columnId]);

  return (
    <Fragment>
      <CardGrid>
        {cards.length > 0 ? (
          cards.map(({ id, name }) => (
            <ColumnCard key={id} id={id}>
              {name}
            </ColumnCard>
          ))
        ) : (
          <Div>You don't have cards yet :(</Div>
        )}
      </CardGrid>

      <Div className="Cards__createButton">
        <CardCreate columnId={columnId} />
      </Div>
    </Fragment>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default memo(Cards);
