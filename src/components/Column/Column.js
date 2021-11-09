import React from "react";
import PropTypes from "prop-types";
import {
  Div,
  Card,
  ActionSheet,
  ActionSheetItem,
  Button,
} from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import "./Column.css";
import Cards from "../Cards/Cards";
import { deleteColumn } from "../../api/index";
import { removeColumn, setPopout } from "../../actions/actions";
import Icon16MoreHorizontal from "@vkontakte/icons/dist/16/more_horizontal";

const Column = ({ name, id }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    deleteColumn(id)
      .then((id) => dispatch(removeColumn(id)))
      .catch((e) => console.log(e));
  };

  const showColumnOptions = () => {
    dispatch(
      setPopout(
        <ActionSheet onClose={() => dispatch(setPopout(null))}>
          <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>
            Delete
          </ActionSheetItem>
        </ActionSheet>
      )
    );
  };

  return (
    <Div className="column">
      <div className="column__header">
        <p className="column__title">{name}</p>
        <Button
          className="column__header-button"
          size="s"
          mode="overlay_outline"
          onClick={showColumnOptions}
        >
          <Icon16MoreHorizontal />
        </Button>
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
