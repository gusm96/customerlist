import List from "./models/List";

export const getHome = async (req, res) => {
  const lists = await List.find({});
  return res.render("home", { pageTitle: "주문실수 명단", lists });
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "작성하기" });
};
export const postUpload = async (req, res) => {
  const { date, name, account, phNumber, service } = req.body;
  console.log(req.body);
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
  return res.render("list", { pageTitle: `주문실수 명단`, list });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const list = await List.findById(id);
  if (!list) {
    return res.render("404", { pageTitle: "List not found" });
  }
  return res.render("edit", { pageTitle: "수정하기", list });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { date, name, account, phNumber, service } = req.body;
  const list = await List.exists({ _id: id });
  if (!list) {
    return res.render("404", { pageTitle: "List not found" });
  }
  await List.findByIdAndUpdate(id, {
    date,
    name,
    account,
    phNumber,
    service,
  });
  return res.redirect(`/list/${id}`);
};

export const getDelete = async (req, res) => {
  const { id } = req.params;
  await List.findByIdAndDelete(id);
  return res.redirect("/");
};
