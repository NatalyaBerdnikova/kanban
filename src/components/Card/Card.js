import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";

import "./Card.css";
import { deleteCard } from "../../actions/index";
import Context from "../App/context";

const ColumnCard = ({ children, id }) => {
  const { removeCard } = useContext(Context);
  const deleteItem = async () => {
    deleteCard(id)
      .then(() => removeCard(id))
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
