import React from "react";
import PropTypes from "prop-types";
import { Button, Div, Card, Input } from "@vkontakte/vkui";
import Icon24Add from "@vkontakte/icons/dist/24/add";
import Icon24Dismiss from "@vkontakte/icons/dist/24/dismiss";

import { useCreateForm } from "../CreateForm/hooks";

const CardCreateForm = ({ onSubmit }) => {
  const {
    name,
    status,
    reset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode,
  } = useCreateForm({ onSubmit });

  if (isButtonMode) {
    return (
      <Button
        size="l"
        before={<Icon24Add />}
        stretched={true}
        mode="outline"
        onClick={setFormMode}
      >
        Add Card
      </Button>
    );
  }

  return (
    <>
      <Card mode="shadow">
        <Div>
          <form onSubmit={submit}>
            <Input
              className="card-create-form__input"
              autoFocus
              placeholder="Enter card's name"
              value={name}
              status={status}
              onChange={onChangeInput}
            />
            <div className="card-create-form__buttons">
              <Button
                size="s"
                className="card-create-form__action-button"
                mode="commerce"
                style={{ marginRight: 8 }}
                onClick={submit}
              >
                Create
              </Button>
              <Button size="s" mode="tertiary" onClick={reset}>
                <Icon24Dismiss />
              </Button>
            </div>
          </form>
        </Div>
      </Card>
    </>
  );
};

CardCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CardCreateForm;
