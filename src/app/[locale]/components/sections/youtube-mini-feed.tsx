export default function YoutubeMiniFeed() {
  return (
    <div className="lg:custom-grid-1 lg:grid grid-cols-1">
      <div
        className="grid gap-1 lg:gap-2 md:grid-cols-2 lg:grid-cols-4 bg-transparent relative pt-1 lg:pt-2 xl:pt-3 pb-5 z-index-3 md:px-10 md:top-[-50px]"
        id="numbers"
      >
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full"
          frameBorder="0"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=1"
          title="YouTube Playlist"
        />

        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full hidden md:flex"
          frameBorder="0"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=2"
          title="YouTube Playlist"
        />
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full hidden md:flex"
          frameBorder="0"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=3"
          title="YouTube Playlist"
        />
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full hidden md:flex"
          frameBorder="0"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=4"
          title="YouTube Playlist"
        />
      </div>
    </div>
  )
}
