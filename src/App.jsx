import PlayerControls from "./components/PlayerControls";
import TrackList from "./components/TrackList";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <div>
        <Header />

        <TrackList />
        <PlayerControls />
      </div>
    </>
  );
}

export default App;
