import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";

export const Cards = () => {
  const [slugs, setSlugs] = useState<string[]>([]);
  const { cardIds } = useParams();

  useEffect(() => {
    const tmp = cardIds?.split(",") || [];
    console.log("Effect", cardIds, tmp);
    if (tmp.length <= 0) {
      return;
    }
    setSlugs(tmp);
  }, [cardIds]);

  const cards = slugs.map((slug) => <Card data={slug} />);

  return (
    <>
      <h1>Cards</h1>
      <div>{cards}</div>
    </>
  );
};
