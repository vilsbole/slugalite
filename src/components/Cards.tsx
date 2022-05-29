import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "./Card";
import { getCards } from "../api";

export const Cards = () => {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const { cardIds } = useParams();

  useEffect(() => {
    const tmp = cardIds?.split(",") || [];
    if (tmp.length <= 0) {
      return;
    }
    getCards(tmp).then((cards) => setData(cards));
  }, [cardIds]);

  return (
    <>
      <h1>
        <Link to="/">/</Link> &gt; Cards
      </h1>
      <div>
        {data ? data.map((d, idx) => <Card key={idx} data={d} />) : "Loading"}
      </div>
    </>
  );
};
