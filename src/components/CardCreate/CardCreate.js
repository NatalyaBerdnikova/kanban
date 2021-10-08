import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Div } from "@vkontakte/vkui";

import CreateForm from "../CreateForm/CreateForm";
import { createCard } from "../../actions/index";
import Context from "../../components/App/context";

const CardCreate = ({ columnId }) => {
  const { addCard } = useContext(Context);

  const createItem = (name) => {
    return createCard(name, columnId)
      .then((doc) => addCard({ id: doc.id, name }))
      .catch((e) => console.log(e));
  };

  return (
    <Div className="column">
      <CreateForm
        onSubmit={createItem}
        placeholder="Enter card's name"
        actionTitle="Create a card"
      />
    </Div>
  );
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
