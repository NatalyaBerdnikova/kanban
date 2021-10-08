import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Div, Card, FormLayout, Input } from "@vkontakte/vkui";
import Icon24Add from "@vkontakte/icons/dist/24/add";

const modes = {
  button: "button",
  form: "form",
};

const statuses = {
  default: "default",
  error: "error",
};

const CreateForm = ({ onSubmit, placeholder, actionTitle }) => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(statuses.default);

  const reset = () => {
    setStatus(statuses.default);
    setMode(modes.button);
    setName("");
  };

  const submit = (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }
    onSubmit(name).then(reset);
  };

  if (mode === modes.button) {
    return (
      <Button
        size="l"
        before={<Icon24Add />}
        stretched={true}
        onClick={() => setMode(modes.form)}
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
              onChange={(event) => setName(event.target.value)}
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

export default CreateForm;
