import React from "react";
import BlockTitle from "../Block-Title/Block-Title";
import { Container } from "../Global-Components/Container";
import * as S from "./Advantages-style";
import Card from "./Advantages-Card";

export default function Advantages() {
  const content = {
    title: "Our mission",
    text: "Empowering businesses with secure, fast, and versatile cryptocurrency payment solutions that meet every financial need.",
  };

  const list = [
    {
      id: 1,
      header: ["Main advantages", "Global Reach"],
      image: "",
      json: "global_reach.json",
      title: "Global Reach",
      text: "Accept crypto payments from anywhere in the world, breaking down geographic barriers.",
    },
    {
      id: 2,
      header: ["Main advantages", "Easy Integration"],
      image: "",
      json: "easy_integration.json",
      title: "Easy Integration",
      text: "Quickly and seamlessly integrate Paylect into your existing systems without extensive technical expertise.",
    },
    {
      id: 3,
      header: ["Main advantages", "Versatile Tools"],
      image: "",
      json: "versatile_tools.json",
      title: "Versatile Tools",
      text: "All-in-one tools designed to simplify and enhance your cryptocurrency financial management.",
    },
  ];

  return (
    <Container id="anhor1">
      <section>
        <BlockTitle data={content} />

        <S.CardGrid>
          {list.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </S.CardGrid>
      </section>
    </Container>
  );
}
