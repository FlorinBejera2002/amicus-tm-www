export default function YoutubeMiniFeed() {
  return (
    <div className="custom-grid-1">
      <div
        className="flex gap-2 bg-color-light relative pt-2 pb-5 z-index-3 container flex-wrap"
        id="numbers"
      >
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          frameBorder="0"
          height="200"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=1"
          title="YouTube Playlist"
          width="370"
        />

        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          frameBorder="0"
          height="200"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=2"
          title="YouTube Playlist"
          width="370"
        />
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          frameBorder="0"
          height="200"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=3"
          title="YouTube Playlist"
          width="370"
        />
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          frameBorder="0"
          height="200"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=4"
          title="YouTube Playlist"
          width="370"
        />
      </div>
    </div>
  )
}
