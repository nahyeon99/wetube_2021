const fakeUser = {
  userName: "Nahyeon",
  loggedIn: true,
};

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", fakeUser });
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
