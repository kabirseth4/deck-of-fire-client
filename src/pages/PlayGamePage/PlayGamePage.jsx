import { usePlayers } from "hooks";
import { GamePlayers, GameDeck } from "components";
import "./PlayGamePage.scss";

export const PlayGamePage = () => {
  const {
    players,
    currentTurn,
    scrollRefs,
    setCurrentTurn,
    setPlayers,
    getPlayers,
  } = usePlayers();

  return (
    <main className="deck-play-page">
      <GameDeck
        setCurrentTurn={setCurrentTurn}
        players={players}
        scrollRefs={scrollRefs}
      />
      <GamePlayers
        players={players}
        currentTurn={currentTurn}
        setPlayers={setPlayers}
        getPlayers={getPlayers}
        scrollRefs={scrollRefs}
      />
    </main>
  );
};
