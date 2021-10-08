import React from "react";
import { View, Panel, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { initApp } from "../../actions/index";

import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";
import { panel } from "./constants";
import Context from "./context";
import { useAppState } from "./hooks";

const App = () => {
  // Приложение
  initApp();
  const state = useAppState();

  return (
    <Context.Provider value={state}>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel={state.activePanel}>
            <Panel id={panel.desks}>
              <Desks />
            </Panel>
            <Panel id={panel.columns}>{state.activeDesk && <Columns />}</Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </Context.Provider>
  );
};

export default App;
