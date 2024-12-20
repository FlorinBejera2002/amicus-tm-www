import type { StaticImageData } from 'next/image'

import imageEpisod1 from '../../../../../../public/Ep1.png'
import imageEpisod2 from '../../../../../../public/Ep2.png'
import imageEpisod3 from '../../../../../../public/Ep3.png'
import imageEpisod4 from '../../../../../../public/Ep4.png'
import imageEpisod5 from '../../../../../../public/Ep5.png'
import imageEpisod6 from '../../../../../../public/Ep6.png'
import imageEpisod7 from '../../../../../../public/Ep7.png'
import imageEpisod8 from '../../../../../../public/Ep8.png'
import imageEpisod9 from '../../../../../../public/Ep9.png'
import imageEpisod10 from '../../../../../../public/Ep10.png'
import imageEpisod11 from '../../../../../../public/Ep11.png'
import imageEpisod12 from '../../../../../../public/Ep12.png'
import imageEpisod13 from '../../../../../../public/Ep13.png'
import imageEpisod14 from '../../../../../../public/Ep14.png'
import imageEpisod15 from '../../../../../../public/Ep15.png'

type IEpisode = {
  episodeImage: StaticImageData
  id: number
  title: string
  url: string
}

const episode: IEpisode[] = [
  {
    episodeImage: imageEpisod1,
    id: 0,
    title: 'EPISODUL 1',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg'
  },
  {
    episodeImage: imageEpisod2,
    id: 1,
    title: 'EPISODUL 2',
    url: 'https://www.youtube.com/watch?v=iPCdT-8E3KM'
  },
  {
    episodeImage: imageEpisod3,
    id: 2,
    title: 'EPISODUL 3',
    url: 'https://www.youtube.com/watch?v=9S83G69yoMA'
  },
  {
    episodeImage: imageEpisod4,
    id: 3,
    title: 'EPISODUL 4',
    url: 'https://www.youtube.com/watch?v=Vcrl3G1ctW4'
  },
  {
    episodeImage: imageEpisod5,
    id: 4,
    title: 'EPISODUL 5',
    url: 'https://www.youtube.com/watch?v=jcS7egdnh0g'
  },
  {
    episodeImage: imageEpisod6,
    id: 5,
    title: 'EPISODUL 6',
    url: 'https://www.youtube.com/watch?v=e3LmucqbxlA'
  },
  {
    episodeImage: imageEpisod7,
    id: 6,
    title: 'EPISODUL 7',
    url: 'https://www.youtube.com/watch?v=73B1xbOd534'
  },
  {
    episodeImage: imageEpisod8,
    id: 7,
    title: 'EPISODUL 8',
    url: 'https://www.youtube.com/watch?v=BFgVOWQpnHI'
  },
  {
    episodeImage: imageEpisod9,
    id: 8,
    title: 'EPISODUL 9',
    url: 'https://www.youtube.com/watch?v=Y3VsDbi0SgQ'
  },
  {
    episodeImage: imageEpisod10,
    id: 9,
    title: 'EPISODUL 10',
    url: 'https://www.youtube.com/watch?v=anuOtbRJqIo'
  },
  {
    episodeImage: imageEpisod11,
    id: 10,
    title: 'EPISODUL 11',
    url: 'https://www.youtube.com/watch?v=jed0bn8vg98'
  },
  {
    episodeImage: imageEpisod12,
    id: 11,
    title: 'EPISODUL 12',
    url: 'https://www.youtube.com/watch?v=GFep6KRPrco'
  },
  {
    episodeImage: imageEpisod13,
    id: 12,
    title: 'EPISODUL 13',
    url: 'https://www.youtube.com/watch?v=JMUEX0afxiM'
  },
  {
    episodeImage: imageEpisod14,
    id: 13,
    title: 'EPISODUL 14',
    url: 'https://www.youtube.com/watch?v=l-4izkZxPik'
  },
  {
    episodeImage: imageEpisod15,
    id: 14,
    title: 'EPISODUL 15',
    url: 'https://www.youtube.com/watch?v=hwhXipb6iQ8'
  }
]

export default episode
