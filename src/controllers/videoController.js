import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    return res.render("server-error", error);
  }
};
export const search = (req, res) => {
  res.render("search");
};
export const watch = (req, res) => {
  const {
    params: { id },
  } = req;

  return res.render("watchVideo", {
    pageTitle: `Watching: ${video.title}`,
  });
};
export const getEditVideo = (req, res) => {
  const {
    params: { id },
  } = req;
  return res.render("editVideo", {
    pageTitle: `Editing`,
  });
};

export const postEditVideo = (req, res) => {
  const {
    params: { id },
  } = req;
  const {
    body: { title },
  } = req;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description, hashtags },
  } = req;
  try {
    await Video.create({
      title,
      description,
      createdAt: Date.now(),
      meta: {
        views: 0,
        rating: 0,
      },
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
