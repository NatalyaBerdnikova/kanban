import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Div, Card, PanelHeader, Button } from "@vkontakte/vkui";

import "./Column.css";
import Cards from "../Cards/Cards";
import { deleteColumn } from "../../actions/index";
import Context from "../../components/App/context";

const Column = ({ name, id }) => {
  const { removeColumn } = useContext(Context);
  const deleteItem = () => {
    deleteColumn(id)
      .then((id) => removeColumn(id))
      .catch((e) => console.log(e));
  };

  return (
    <Div className="column">
      <div className="column__header">
        <p>{name}</p>
        <div className="column__button">
          <Button size="m" mode="destructive" onClick={deleteItem}>
            Delete
          </Button>
        </div>
      </div>
      <Card className="column__wrapper">
        <Cards columnId={id} />
      </Card>
    </Div>
  );
};

Column.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Column;
