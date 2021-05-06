export const home = (req, res) => {
  const videos = [
    {
      title: "video #1",
      rating: 5,
      comments: 2,
      createdAt: "2 minute ago",
      views: 59,
      id: 1,
    },
    {
      title: "video #2",
      rating: 5,
      comments: 3,
      createdAt: "2 minute ago",
      views: 59,
      id: 2,
    },
    {
      title: "video #3",
      rating: 5,
      comments: 2,
      createdAt: "2 minute ago",
      views: 59,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  res.render("search");
};
export const see = (req, res) => {
  res.render("watchVideo");
};
export const editVideo = (req, res) => {
  res.render("editVideo");
};
export const deleteVideo = (req, res) => res.send("delete");
export const upload = (req, res) => res.send("upload");
