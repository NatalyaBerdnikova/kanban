import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";

import "./DeskItem.css";
import { deleteDesk } from "../../actions/index";
import Context from "../App/context";

const DeskItem = ({ id, children }) => {
  const { goToColumns, removeDesk } = useContext(Context);
  const goToColumnPanel = () => goToColumns(id);
  const deleteItem = async (event) => {
    event.stopPropagation();
    deleteDesk(id)
      .then(() => removeDesk(id))
      .catch((e) => console.log(e));
  };

  return (
    <Card onClick={goToColumnPanel}>
      <Div className="desk-item__content">
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Delete
        </Button>
      </Div>
    </Card>
  );
};

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default DeskItem;
