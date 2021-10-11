import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Div } from "@vkontakte/vkui";

import CardCreateForm from "./CardCreateForm";
import { createCard } from "../../actions/index";
import Context from "../../components/App/context";

import "./CardCreate.css";

const CardCreate = ({ columnId }) => {
  const { addCard } = useContext(Context);

  const createItem = (name) => {
    return createCard(name, columnId)
      .then((doc) => addCard({ id: doc.id, name }))
      .catch((e) => console.log(e));
  };

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
