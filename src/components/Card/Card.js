import React from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import "./Card.css";
import { deleteCard } from "../../api/index";

const ColumnCard = ({ children, id }) => {
  const dispatch = useDispatch();
  const deleteItem = async () => {
    deleteCard(id)
      .then(() => dispatch(removeCard(id)))
      .catch((e) => console.log(e));
  };

  return (
    <Card mode="outline">
      <div className="card__wrapper">
        <Div>{children}</Div>
      </div>
    </Card>
  );
};

ColumnCard.proptypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default ColumnCard;
