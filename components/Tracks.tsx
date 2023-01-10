import TableHeader from "./TableHeader";
import Track from "./Track";

const tracks = [
  {
    id: 1,
    src: "track1.mp3",
    artist: "Ed",
    album: "Ed's Album",
    imgSrc: "https://unsplash.it/40/40",
    duration: "4:12",
  },
];

export default function Tracks({
  playing,
  setPlaying,
  selected,
  setSelected,
}: any) {
  return (
    <div className="w-full mx-auto px-4 py-2">
      <TableHeader />
      {tracks.map((track, index) => {
        return (
          <Track
            key={track.id}
            track={track}
            selected={selected}
            setSelected={setSelected}
            playing={playing}
            setPlaying={setPlaying}
            isFirstTrack={index === 0}
          />
        );
      })}
    </div>
  );
}
