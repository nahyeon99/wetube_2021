export const home = (req, res) => res.send("Home Pages Videos");
export const search = (req, res) => res.send("Search");
export const see = (req, res) => {
  res.send(`Watch Video #${req.params.id}`);
};
export const editVideo = (req, res) => res.send("edit video");
export const deleteVideo = (req, res) => res.send("delete");
export const upload = (req, res) => res.send("upload");
