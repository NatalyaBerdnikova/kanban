import React, { useEffect, Fragment, memo } from "react";
import { View, Panel, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { useRoute } from "react-router5";
import { useSelector, useDispatch } from "react-redux";

import { pages } from "../../../router";
import { changeRoute } from "../../actions";
import { getActivePanel, getPopout } from "../../selectors";

import Desks from "../../../features/desks/panels/Desks/Desks";
import Columns from "../../../features/columns/panels/Columns/Columns";
import Card from "../../../features/card/panels/Card/Card";

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

export default memo(App);
