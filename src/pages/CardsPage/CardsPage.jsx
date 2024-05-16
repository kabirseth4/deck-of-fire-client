import { useState } from "react";
import { CardList } from "../../components/CardList/CardList";
import { useGetData } from "hooks";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Button } from "../../components/Button/Button";
import { CreateCardModal } from "../../components/CreateCardModal/CreateCardModal";
import "./CardsPage.scss";

export const CardsPage = () => {
  const { data: cards, isLoading, error } = useGetData("cards");
  const [showModal, setShowModal] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Please try again later.</p>;

  return (
    <>
      <main
        className={`cards-page${showModal ? " cards-page--no-scroll" : ""}`}
      >
        <h1 className="cards-page__title">Cards</h1>
        {cards.length > 0 ? (
          <CardList cards={cards} />
        ) : (
          <p>Create cards to add to your decks.</p>
        )}
        {showModal && <CreateCardModal setShowModal={setShowModal} />}
      </main>
      <section className="cards-page__page-buttons">
        <LinkButton
          to="/decks"
          className="link-button--secondary cards-page__page-button"
          label="Decks"
        />
        <Button
          label="Create card"
          className="cards-page__page-button"
          onClick={() => {
            setShowModal(true);
          }}
        />
      </section>
    </>
  );
};
