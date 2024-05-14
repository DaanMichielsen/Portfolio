async function VideoComponent({ fileName }: { fileName: string }) {
  return (
    <video
      controls
      preload='none'
      aria-label='Video player'
      className='rounded-lg'
    >
      <source src={fileName} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoComponent;
