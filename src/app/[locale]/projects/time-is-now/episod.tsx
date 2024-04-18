import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

type Props = {
  episodImage: StaticImageData
  styles?: string
  title: string
  url: string
}

export default function Episod(props: Props) {
  return (
    <div className={`flex flex-wrap flex-col gap-3 ${props.styles}`}>
      <Link href={props.url}>
        <Image
          alt="arise for christ logo"
          className="object-contain hover:-translate-1 hover:scale-105 duration-300 "
          src={props.episodImage}
        />
      </Link>
      <h4 className="pl-3 text-sm text-[#5b5f66] font-poppins">
        {props.title}
      </h4>
    </div>
  )
}
