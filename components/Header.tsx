import { BsSpotify, BsPlayFill, BsPauseFill } from "react-icons/bs";

export default function Header({ playing, setPlaying, selected }: any) {
  const handleVolume = (e: any) => {
    Howler.volume(parseInt(e.target.value, 10) / 100);
  };

  const togglePlay = () => {
    if (!selected) return;

    if (playing) {
      selected.pause();
      setPlaying(false);
    } else {
      selected.play();
      setPlaying(true);
    }
  };

  return (
    <div className="bg-header w-full p-4 flex items-center justify-between">
      <div className="flex items-center">
        <BsSpotify className="text-textLight" size="30px" />
        <h1 className="text-textLight text-2xl font-bold ml-2">Spotify</h1>
      </div>
      <div className="flex items-center">
        <input
          type="range"
          max="100"
          defaultValue="100"
          onChange={handleVolume}
          className="cursor-pointer"
        />
        <button
          className="text-textLight bg-brand p-2 rounded-full ml-4"
          onClick={togglePlay}
        >
          {playing ? <BsPauseFill size="24px" /> : <BsPlayFill size="24px" />}
        </button>
      </div>
    </div>
  );
}
