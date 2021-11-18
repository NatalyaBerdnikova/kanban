import React, { memo } from "react";
import PropTypes from "prop-types";
import { Button, Div, Card, FormLayout, Input } from "@vkontakte/vkui";
import Icon24Add from "@vkontakte/icons/dist/24/add";

import { useCreateForm } from "./hooks";

const CreateForm = ({ onSubmit, placeholder, actionTitle }) => {
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
        {actionTitle}
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
              placeholder={placeholder}
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
              {actionTitle}
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

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
};

export default memo(CreateForm);
