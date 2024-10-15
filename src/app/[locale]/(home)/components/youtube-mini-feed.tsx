'use client'
import { useEffect, useState } from 'react'
import InViewTransition from '../../common/in-view-transition'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function useMediaQuery(query: any) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

export default function YoutubeMiniFeed() {
  const ytVids = [
    {
      src: 'https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=1'
    },
    {
      src: 'https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=2'
    },
    {
      src: 'https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=3'
    },
    {
      src: 'https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=4'
    }
  ]

  const isMobile = useMediaQuery('(max-width: 768px)')

  const videosToShow = isMobile ? ytVids.slice(0, 1) : ytVids

  return (
    <div
      className="relative -top-20 z-20 grid gap-2 bg-transparent px-8 pt-1 md:grid-cols-2 md:p-0 md:px-24 lg:grid-cols-4 lg:pt-2 xl:pt-3"
      id="numbers"
    >
      {videosToShow.map((vid, idx) => (
        <InViewTransition damping={25} delay={0.25 + idx * 0.25} key={idx}>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="aspect-video w-full rounded-md object-cover "
            src={vid.src}
            title={`YouTube Playlist ${idx + 1}`}
          />
        </InViewTransition>
      ))}
    </div>
  )
}
