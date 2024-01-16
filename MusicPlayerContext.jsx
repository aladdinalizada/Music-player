import React, { useState } from "react";
// musics
import Mix1 from "./src/assets/mix-1.mp3";
import Mix2 from "./src/assets/mix-2.mp3";
import Mix3 from "./src/assets/mix-3.mp3";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Mix 1",
        file: Mix1,
      },
      {
        name: "Mix 2",
        file: Mix2,
      },
      {
        name: "Mix 3",
        file: Mix3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
