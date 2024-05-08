import { StaticImageData } from 'next/image'

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
