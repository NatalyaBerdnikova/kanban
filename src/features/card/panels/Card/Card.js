import React, { Fragment, useEffect, useState } from "react";
import {
  PanelHeaderBack,
  PanelHeaderSimple,
  PanelSpinner,
} from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "react-router5";
import { fetchCard } from "../../../cards/actions";
import { getName } from "../../../cards/selectors";
import { goBack } from "../../../../app/actions";
import CardContent from "../../components/CardContent/CardContent";

const Card = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoader] = useState(true);
  const {
    route: {
      params: { cardId },
    },
  } = useRoute();
  const cardName = useSelector(getName);
  const goToColumns = () => dispatch(goBack());

  useEffect(() => {
    if (cardId) {
      setLoader(true);

      dispatch(fetchCard(cardId)).finally(() => setLoader(false));
    }
  }, [cardId, dispatch]);

  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToColumns} />}>
        Карточка {cardName ? `«${cardName}»` : ""}
      </PanelHeaderSimple>

      {isLoading && <PanelSpinner />}

      <CardContent />
    </Fragment>
  );
};

export default Card;
