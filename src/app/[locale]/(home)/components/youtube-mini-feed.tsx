import InViewTransition from '../../common/in-view-transition'

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

  return (
    <div
      className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 bg-transparent relative pt-1 lg:pt-2 xl:pt-3 z-index-3 md:px-24 top-[-50px] px-8 md:p-0"
      id="numbers"
    >
      {ytVids.map((vid, idx) => (
        <InViewTransition damping={25} delay={0.25 + idx * 0.25} key={idx}>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="w-full h-48 rounded-md"
            src={vid.src}
            title="YouTube Playlist"
          />
        </InViewTransition>
      ))}
    </div>
  )
}
