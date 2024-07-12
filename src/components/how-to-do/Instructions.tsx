import { ReactElement } from "react";
import { List } from ".";

import "./Instructions.css";

const instructions = [
  "Smula sönder 10 stycken ( mer om det behövs ) digistivetex och blanda sen med smöret. Bred ut det i botten av en en rund form med lösbara kanter. Det ska bli som en tjockt täcke på botten av formen.",
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.",
  "Vispa äggvitorna hårt med en elvisp. De är tillräckligt vispade när du kan vända uppochner på bunken utan att det rör sig.",
  "Häll upp grädden i en mellanstor bunke. Vispa de relativ hårt. En aning hårdare en vanligt.",
  "Blanda i philadelphiaosten och vaniljsockret med äggulorna och vispa ihop.",
  "Häll nu över innehållet i bunken med äggulor över grädden. Vispa ihop på lägsta hastigheten.",
  "Häll sedan över det innehållet till bunken med äggvitorna. Blande ihop med en gaffel tills det blir en slät fluffig smet.",
  "Häll smeten i formen, smula över de resterande digistivetexen om du vill.",
  "Ställ in i frysen över natten.",
  "Servera och toppa med det du känner för.",
];

export function Instructions(): ReactElement {
  return (
    <article className="instructions">
      <h3 className="instructions-header">Instruktioner</h3>
      <List items={instructions} listType="ol" />
    </article>
  );
}
