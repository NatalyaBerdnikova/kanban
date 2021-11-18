import React, { useCallback, memo } from "react";
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
import Cards from "../../../cards/components/Cards/Cards";
import { deleteColumn } from "../../actions";
import Icon16MoreHorizontal from "@vkontakte/icons/dist/16/more_horizontal";
import { setPopout } from "../../../../app/actions";

const Column = ({ name, id }) => {
  const dispatch = useDispatch();

  const deleteItem = useCallback(
    () => dispatch(deleteColumn(id)),
    [dispatch, id]
  );
  const showColumnOptions = useCallback(() => {
    dispatch(
      setPopout(
        <ActionSheet onClose={() => dispatch(setPopout(null))}>
          <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>
            Удалить
          </ActionSheetItem>
          {osname === IOS && (
            <ActionSheetItem autoclose mode="cancel">
              Отменить
            </ActionSheetItem>
          )}
        </ActionSheet>
      )
    );
  }, [dispatch, deleteItem, osname]);

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

export default memo(Column);
