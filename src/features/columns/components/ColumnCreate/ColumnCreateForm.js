import React from "react";
import PropTypes from "prop-types";
import { Button, Div, Card, FormLayout, Input } from "@vkontakte/vkui";
import Icon24Add from "@vkontakte/icons/dist/24/add";

import { useCreateForm } from "../../../../components/CreateForm/hooks";

const ColumnCreateForm = ({ onSubmit }) => {
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
        mode="overlay_secondary"
        onClick={setFormMode}
      >
        Add column
      </Button>
    );
  }

  return (
    <>
      <Card mode="shadow">
        <FormLayout onSubmit={submit}>
          <Div>
            <Input
              autoFocus
              placeholder="Enter Column's name"
              value={name}
              status={status}
              onChange={onChangeInput}
            />
          </Div>
          <Div style={{ display: "flex" }}>
            <Button
              size="l"
              stretched
              style={{ marginRight: 8 }}
              onClick={submit}
            >
              Add
            </Button>
            <Button size="l" stretched mode="tertiary" onClick={reset}>
              Cancel
            </Button>
          </Div>
        </FormLayout>
      </Card>
    </>
  );
};

ColumnCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ColumnCreateForm;
