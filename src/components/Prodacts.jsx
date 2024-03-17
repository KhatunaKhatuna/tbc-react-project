import logo from "../logo.svg";
import { Card } from "./Card";

export default function Prodacts() {
  const cards = [];
  let description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  description =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  for (let index = 1; index <= 12; index++) {
    // Push the generated product object into the products array
    cards.push({
      id: Math.random() * Math.random(),
      logo,
      title: `Prodact ${index}`,
      description,
    });
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8  max-w-[90%] my-0 mx-auto">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
