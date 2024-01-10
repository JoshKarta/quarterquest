import Heading from "@/components/heading";
import CardsSection from "./cardsSection";
import Chartsection from "./chartsection";
import TransactionList from "./transactionList";

export default function Home() {
  return (
    <section>
      <Heading />
      <CardsSection />
      <Chartsection />
      <TransactionList />
    </section>
  );
}
