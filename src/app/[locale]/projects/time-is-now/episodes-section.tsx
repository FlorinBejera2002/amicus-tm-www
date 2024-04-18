import Episod from './episod'

export default function EpisodesSection() {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center pb-20">
      <h4 className="text-lg text-[#ffffff]">
        Fiecare episod poate fi accesat prin intermediul link-urilor de mai jos.
      </h4>
      <div>
        <Episod
          episodImage="firstEpisod"
          title="EPISODUL 1"
          url="https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s"
        />
      </div>
    </div>
  )
}
