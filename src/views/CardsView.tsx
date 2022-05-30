import React, { useEffect, useState, useRef, forwardRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardSkeleton } from "../components";
import { getCards } from "../api";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const CardList = forwardRef(({ data }, ref) => (
  <div ref={ref} style={{ display: "flex", flexDirection: "column" }}>
    {data.map((d, idx) => (
      <Card key={idx} data={d} />
    ))}
  </div>
));

const CardSkeletons = forwardRef((_props, ref) => (
  <div ref={ref} style={{ display: "flex", flexDirection: "column" }}>
    {Array.from(Array(4).keys()).map((d, idx) => (
      <CardSkeleton key={idx} />
    ))}
  </div>
));

export const CardsView = () => {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const { cardIds } = useParams();

  useEffect(() => {
    const slugs = cardIds?.split(",") || [];
    if (slugs.length > 0) {
      setSlugs(slugs);
    }
  }, [cardIds]);

  const fetchCards = () => {
    getCards(slugs).then((cards) => setData(cards));
  };

  const transitionRef = useRef(null);

  return (
    <>
      <h1>
        <Link to="/">.</Link> / Cards
      </h1>
      <button onClick={fetchCards}>Reveal Cards</button>
      <div style={{ marginTop: "1em" }}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            nodeRef={transitionRef}
            key={data.length > 0 ? "CardList" : "Skeleton"}
            timeout={300}
            classNames="fade"
          >
            {data.length > 0 ? (
              <CardList ref={transitionRef} data={data} />
            ) : (
              <CardSkeletons ref={transitionRef} />
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
};
