const RecentEvents = () => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold font-montserrat text-center">
        OUR RECENT EVENTS
      </h2>
      <div className="grid grid-cols-3 max-w-6xl mx-auto mt-10">
        <iframe
          className="aspect-square"
          height="315"
          src="https://www.youtube.com/embed/MeKT_uvLMCE?si=sJzpZlVjxVk4Hp6s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="aspect-square"
          height="315"
          src="https://www.youtube.com/embed/8NKvjpIAD0A?si=BOL8EHsxuUnG7vZ0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="aspect-square"
          height="315"
          src="https://www.youtube.com/embed/krXN_5eOjso?si=H9CKWuCxidCLWeP1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default RecentEvents;
