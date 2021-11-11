import React from "react";
import PropTypes from "prop-types";
import { Div } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import CardCreateForm from "./CardCreateForm";
import { createCard } from "../../actions/actions";

import "./CardCreate.css";

const CardCreate = ({ columnId }) => {
  const dispatch = useDispatch();

  const createItem = (name) => dispatch(createCard(name, columnId));

  return (
    <Div className="create-form__wrapper">
      <CardCreateForm onSubmit={createItem} />
    </Div>
  );
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
