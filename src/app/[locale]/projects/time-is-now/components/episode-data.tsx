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
  episodImage: StaticImageData
  id: number
  title: string
  url: string
}

const episode: IEpisode[] = [
  {
    episodImage: imageEpisod1,
    id: 0,
    title: 'EPISODUL 1',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod2,
    id: 1,
    title: 'EPISODUL 2',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod3,
    id: 2,
    title: 'EPISODUL 3',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod4,
    id: 3,
    title: 'EPISODUL 4',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod5,
    id: 4,
    title: 'EPISODUL 5',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod6,
    id: 5,
    title: 'EPISODUL 6',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod7,
    id: 6,
    title: 'EPISODUL 7',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod8,
    id: 7,
    title: 'EPISODUL 8',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod9,
    id: 8,
    title: 'EPISODUL 9',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod10,
    id: 9,
    title: 'EPISODUL 10',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod11,
    id: 10,
    title: 'EPISODUL 11',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod12,
    id: 11,
    title: 'EPISODUL 12',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod13,
    id: 12,
    title: 'EPISODUL 13',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod14,
    id: 13,
    title: 'EPISODUL 14',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  },
  {
    episodImage: imageEpisod15,
    id: 14,
    title: 'EPISODUL 15',
    url: 'https://www.youtube.com/watch?v=PoZW1wUO0mg&t=467s'
  }
]

export default episode
