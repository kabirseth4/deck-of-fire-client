import { Link } from "react-router-dom";
import { useGetDeckDetails } from "../../hooks/useGetDeckDetails";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { DeckRules } from "../../components/DeckRules/DeckRules";
import "./DeckDetailsPage.scss";

export const DeckDetailsPage = () => {
  const { deckDetails, isLoading, isError } = useGetDeckDetails();

  if (isLoading) return <main>Loading...</main>;
  if (isError)
    return <main>Something went wrong. Please try again later.</main>;

  const {
    name,
    is_scored: isScored,
    is_custom: isCustom,
    is_playable: isPlayable,
    rules,
  } = deckDetails;

  return (
    <main>
      <LinkButton to="/decks" label="<- Back" />
      <h1>{name}</h1>
      <p>Is scored: {isScored ? "Yes" : "No"}</p>
      <p>Is custom: {isCustom ? "Yes" : "No"}</p>
      {!!isPlayable && <Link to="play">Play</Link>}
      <DeckRules
        rules={rules}
        isScored={Boolean(isScored)}
        isCustom={Boolean(isCustom)}
      />
    </main>
  );
};
