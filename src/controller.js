import List from "./models/List";

export const getHome = async (req, res) => {
  const lists = await List.find({});
  return res.render("home", { pageTitle: "홈", lists });
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "작성하기" });
};
export const postUpload = async (req, res) => {
  const { date, name, account, phNumber, service } = req.body;
  try {
    await List.create({
      date,
      name,
      account,
      phNumber,
      service: service.split(",").map((word) => `${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageName: "작성하기",
      errorMessage: error._message,
    });
  }
};
export const getList = async (req, res) => {
  const { id } = req.params;
  const list = await List.findById(id);
  return res.render("list", { pageTitle: "고객명단", list });
};
export const getEdit = (req, res) => {
  return res.render("edit", { pageTitle: "수정하기" });
};
