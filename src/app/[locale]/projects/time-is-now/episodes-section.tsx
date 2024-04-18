import Episod from './episod'

import imageEpisod15 from '../../../../../public/image-episod15.jpg'
import imageEpisod14 from '../../../../../public/image-episod14.jpg'
import imageEpisod13 from '../../../../../public/image-episod13.jpg'
import imageEpisod12 from '../../../../../public/image-episod12.jpg'
import imageEpisod11 from '../../../../../public/image-episod11.jpg'
import imageEpisod10 from '../../../../../public/image-episod10.jpg'
import imageEpisod9 from '../../../../../public/image-episod9.jpg'
import imageEpisod8 from '../../../../../public/image-episod8.jpg'
import imageEpisod7 from '../../../../../public/image-episod7.jpg'
import imageEpisod6 from '../../../../../public/image-episod6.jpg'
import imageEpisod5 from '../../../../../public/image-episod5.jpg'
import imageEpisod4 from '../../../../../public/image-episod4.jpg'
import imageEpisod3 from '../../../../../public/image-episod3.jpg'
import imageEpisod2 from '../../../../../public/image-episod2.jpg'
import imageEpisod1 from '../../../../../public/image-episod1.jpg'

export default function EpisodesSection() {
  return (
    <>
      <div className=" w-screen px-96 flex flex-col justify-center items-center ">
        <h4 className="text-lg text-white">
          Fiecare episod poate fi accesat prin intermediul link-urilor de mai
          jos.
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-3 ">
          <Episod
            episodImage={imageEpisod1}
            title="EPISODUL 1"
            url="https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s"
          />
          <Episod
            episodImage={imageEpisod2}
            title="EPISODUL 2"
            url="https://www.youtube.com/watch?v=iPCdT-8E3KM&t=1109s"
          />
          <Episod
            episodImage={imageEpisod3}
            title="EPISODUL 3"
            url="https://www.youtube.com/watch?v=9S83G69yoMA"
          />
          <Episod
            episodImage={imageEpisod4}
            title="EPISODUL 4"
            url="https://www.youtube.com/watch?v=Vcrl3G1ctW4"
          />
          <Episod
            episodImage={imageEpisod5}
            title="EPISODUL 5"
            url="https://www.youtube.com/watch?v=jcS7egdnh0g&t=729s"
          />
          <Episod
            episodImage={imageEpisod6}
            title="EPISODUL 6"
            url="https://www.youtube.com/watch?v=e3LmucqbxlA&t=932s"
          />
          <Episod
            episodImage={imageEpisod7}
            title="EPISODUL 7"
            url="https://www.youtube.com/watch?v=73B1xbOd534"
          />
          <Episod
            episodImage={imageEpisod8}
            title="EPISODUL 8"
            url="https://www.youtube.com/watch?v=BFgVOWQpnHI&t=10s"
          />
          <Episod
            episodImage={imageEpisod9}
            title="EPISODUL 9"
            url="https://www.youtube.com/watch?v=Y3VsDbi0SgQ"
          />
          <Episod
            episodImage={imageEpisod10}
            title="EPISODUL 10"
            url="https://www.youtube.com/watch?v=anuOtbRJqIo&t=1412s"
          />
          <Episod
            episodImage={imageEpisod11}
            title="EPISODUL 11"
            url="https://www.youtube.com/watch?v=jed0bn8vg98"
          />
          <Episod
            episodImage={imageEpisod12}
            title="EPISODUL 12"
            url="https://www.youtube.com/watch?v=GFep6KRPrco"
          />
          <Episod
            episodImage={imageEpisod13}
            title="EPISODUL 13"
            url="https://www.youtube.com/watch?v=JMUEX0afxiM&t=921s"
          />
          <Episod
            episodImage={imageEpisod14}
            title="EPISODUL 14"
            url="https://www.youtube.com/watch?v=l-4izkZxPik&t=448s"
          />
          <Episod
            episodImage={imageEpisod15}
            title="EPISODUL 15"
            url="https://www.youtube.com/watch?v=hwhXipb6iQ8"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-24 py-7 mx-96 border-t border-b border-white">
        <p className="text-lg text-white">
          `Câmpurile sunt bogate pentru seceriş, dar secerătorii sunt puţini.
          <br />
          Rugaţi deci pe Domnul secerişului să trimită lucrători în secerişul
          Lui.`
        </p>
        <p className="text-lg text-white">Luca 10:2</p>
      </div>
    </>
  )
}
