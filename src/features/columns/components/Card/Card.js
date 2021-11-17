import React from "react";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
import { useRouter } from "react-router5";
import { Card as VKCard, Div } from "@vkontakte/vkui";

import "./Card.css";
import { pages } from "../../../../router";
// import { deleteCard } from "../../../cards/actions";

const Card = ({ children, id }) => {
  // const dispatch = useDispatch();
  // const deleteItem = () => dispatch(deleteCard(id));
  const router = useRouter();
  const goToCardPage = () => router.navigate(pages.CARD, { cardId: id });

  return (
    <VKCard size="l" mode="outline" onClick={goToCardPage}>
      <Div className="card__wrapper">{children}</Div>
    </VKCard>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
