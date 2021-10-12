import React, { useEffect, Fragment } from "react";
import { View, Panel, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { useRoute } from "react-router5";

import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";
import { useAppState } from "./hooks";
import { pages } from "../../router";

const App = () => {
  const { activePanel, popout, changeRoute } = useAppState();
  const { router, route } = useRoute();

  useEffect(() => {
    router.subscribe(changeRoute);

    changeRoute({ route });
  }, []);

  if (!activePanel) {
    return null;
  }

  return (
    <Fragment>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel={activePanel} popout={popout}>
            <Panel id={pages.DESKS}>
              <Desks />
            </Panel>
            <Panel id={pages.COLUMNS}>
              <Columns />
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </Fragment>
  );
};

export default App;
