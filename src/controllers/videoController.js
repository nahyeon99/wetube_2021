let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minute ago",
    views: 1,
    id: 0,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 3,
    createdAt: "2 minute ago",
    views: 59,
    id: 1,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minute ago",
    views: 59,
    id: 2,
  },
];

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  res.render("search");
};
export const watch = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = videos[id];
  return res.render("watchVideo", {
    pageTitle: `Watching: ${video.title}`,
    video,
  });
};
export const getEditVideo = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = videos[id];
  return res.render("editVideo", {
    pageTitle: `Editing: ${video.title}`,
    video,
  });
};

export const postEditVideo = (req, res) => {
  const {
    params: { id },
  } = req;
  const {
    body: { title },
  } = req;
  videos[id].title = title;
  return res.redirect(`/videos/${id}`);
};
