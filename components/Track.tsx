import { useEffect, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { Howl } from "howler";

export default function Track({
  track,
  selected,
  setSelected,
  playing,
  setPlaying,
  isFirstTrack,
}: any) {
  const [howl, setHowl] = useState<any>();

  useEffect(() => {
    const newHowl = new Howl({
      src: [track.src],
      loop: true,
      autoplay: false,
    });
    setHowl(newHowl);
    if (isFirstTrack) {
      setSelected(newHowl);
    }
  }, [track]);

  const togglePlay = () => {
    if (howl.playing()) {
      howl.pause();
      setPlaying(false);
      return;
    }
    selected.playing() && selected.pause();
    setPlaying(true);
    howl.play();
    setSelected(howl);
  };

  return (
    <div
      className="grid grid-cols-player mx-auto py-2 rounded-sm transition-colors hover:bg-hover cursor-pointer"
      onClick={togglePlay}
    >
      <div className="col-span-1 flex items-center">
        {selected === howl && playing ? (
          <BsPauseFill size="20px" />
        ) : (
          <BsPlayFill size="20px" />
        )}
        <img src={track.imgSrc} className="w-[40px] h-[40px] ml-2" />
      </div>
      <div className="col-span-5 flex flex-col items-start justify-start">
        <span className="text-white font-semibold">{track.title}</span>
        <span>{track.artist}</span>
      </div>
      <div className="col-span-5 flex items-center justify-start">
        {track.album}
      </div>
      <div className="col-span-1 flex items-center justify-start">
        {track.duration}
      </div>
    </div>
  );
}
