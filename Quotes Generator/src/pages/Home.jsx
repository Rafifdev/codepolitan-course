import { useState } from "react";

import quotes from "../data.json";
import Card from "../components/Card";
import Button from "../components/Button";
import TextTemplate from "../components/Card/TextTemplate";

function Home() {
  const [quote, setQuote] = useState("");

  // Mapping quotes
  const getQuote = (category) => {
    const random = Math.round(Math.random() * 50 + 1);
    category == "love" &&
      quotes.map((item) => item.love[random].map((quote) => setQuote(quote)));
    category == "life" &&
      quotes.map((item) => item.life[random].map((quote) => setQuote(quote)));
    category == "finance" &&
      quotes.map((item) =>
        item.finance[random].map((quote) => setQuote(quote))
      );
  };

  return (
    <div className="w-full h-screen bg-neutral-100 flex justify-center items-center flex-col gap-10">
      {/* Card untuk menampilkan quootes */}
      <div>
        <Card borderTopColor={"border-t-blue-500"} size={"h-56 w-96"}>
          <TextTemplate text={quote.text} author={quote.author} />
        </Card>
      </div>

      {/* Card untuk button generate quotes */}
      <div className="flex justify-center items-center gap-5 font-serif">
        <Card text={"Love Quotes"} borderTopColor={"border-t-pink-500"}>
          <Button onClick={() => getQuote("love")}>Generate</Button>
        </Card>
        <Card text={"Life Quotes"} borderTopColor={"border-t-orange-400"}>
          <Button onClick={() => getQuote("life")}>Generate</Button>
        </Card>
        <Card text={"Finance Quotes"} borderTopColor={"border-t-green-400"}>
          <Button onClick={() => getQuote("finance")}>Generate</Button>
        </Card>
      </div>
    </div>
  );
}

export default Home;
