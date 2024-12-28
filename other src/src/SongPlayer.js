import React, { useRef, useState } from "react";

const SongPlayer = () => {
  const songs = [
    {
      title: "Song 1",
      url: "./beats/",
    },
    {
      title: "Song 2",
      url: "",
    },
    {
      title: "Song 3",
      url: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Index of the currently selected song.
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause status.

  const audioRef = useRef(null); // Reference to the audio player.

  // Play a specific song by index.
  const playSong = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true); // Set playing state to true.
    if (audioRef.current) {
      audioRef.current.load(); // Load the new song.
      audioRef.current
        .play() // Play the song.
        .catch((error) => console.error("Playback failed:", error));
    }
  };

  // Toggle play/pause for the current song.
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the song if it's playing.
      } else {
        audioRef.current
          .play() // Play the song if it's paused.
          .catch((error) => console.error("Playback failed:", error));
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state.
    }
  };

  // Play the next song.
  const playNext = () => {
    const nextIndex = (currentIndex + 1) % songs.length; // Wrap around if at the end.
    playSong(nextIndex);
  };

  // Play the previous song.
  const playPrevious = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length; // Wrap around if at the beginning.
    playSong(prevIndex);
  };

  return (
    <div>
      <h1>Song Player</h1>

      {/* Display the current song title */}
      <h2>Now Playing: {songs[currentIndex].title}</h2>

       {/* Navigation and play/pause buttons */}
       <div style={{ marginTop: "20px" }}>
        <button onClick={playPrevious} style={{ marginRight: "10px" }}>
          Previous
        </button>
        <button onClick={togglePlayPause} style={{ marginRight: "10px" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={playNext}>Next</button>
      </div>

      {/* Render a list of songs */}
      <ul>
        {songs.map((song, index) => (
          <li
            key={index} // Unique key for each song.
            onClick={() => playSong(index)} // Play the selected song on click.
            style={{
              cursor: "pointer",
              marginBottom: "10px",
              fontWeight: index === currentIndex ? "bold" : "normal", // Highlight the current song.
            }}
          >
            {song.title}
          </li>
        ))}
      </ul>

      {/* Audio player element */}
      <audio ref={audioRef}>
        <source src={songs[currentIndex].url} />
        Your browser does not support the audio element.
      </audio>

     
    </div>
  );
};

export default SongPlayer;
