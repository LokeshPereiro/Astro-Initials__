import { Pause, Play } from "./Player"
export const CardPlayButton = ({id}) => {
  return (
    <div className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
        <Play />
    </div>
  )
}
