let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minute ago",
    views: 59,
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
export const see = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = videos[id];

  return res.render("watchVideo", { pageTitle: `Watching ${video.title}` });
};
export const editVideo = (req, res) => {
  res.render("editVideo");
};
export const deleteVideo = (req, res) => res.send("delete");
export const upload = (req, res) => res.send("upload");
