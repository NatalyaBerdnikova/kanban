import React, { useEffect, Fragment } from "react";
import { View, Panel, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { useRoute } from "react-router5";
import { useSelector, useDispatch } from "react-redux";

import Desks from "../../../features/desks/panels/Desks/Desks";
import Columns from "../../../features/columns/panels/Columns/Columns";
import { pages } from "../../../router";
import { changeRoute } from "../../actions";
import { getActivePanel, getPopout } from "../../selectors";

const App = () => {
  const dispatch = useDispatch();
  const activePanel = useSelector(getActivePanel);
  const popout = useSelector(getPopout);
  const { router, route } = useRoute();

  useEffect(() => {
    router.subscribe((...args) => dispatch(changeRoute(...args)));

    dispatch(changeRoute({ route }));
  }, [dispatch]);

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
