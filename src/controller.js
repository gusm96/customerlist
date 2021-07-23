import List from "./models/List";
import User from "./models/User";
import Reservation from "./models/Reserve";

export const getFront = (req, res) => {
  return res.render("front", { pageTitle: "아우프나우트" });
};
export const getHome = async (req, res) => {
  const lists = await List.find({}).sort({ date: "desc" });
  return res.render("home", { pageTitle: "주문실수 명단", lists });
};
export const getLogin = (req, res) => {
  return res.render("login", { pagetitle: "로그인" });
};
export const postLogin = (req, res) => {
  return res.redirect("/home");
};
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "회원가입" });
};
export const postJoin = async (req, res) => {
  const { username, name, email, password, password2 } = req.body;
  const user = await User.create({
    username,
    name,
    email,
    password,
    password2,
  });

  return res.redirect("/login");
};
export const logout = (req, res) => {
  return res.redirect("/");
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "작성하기" });
};
export const postUpload = async (req, res) => {
  const { date, name, address, phNumber, service } = req.body;
  try {
    await List.create({
      date,
      name,
      address,
      phNumber,
      service: List.formatService(service),
    });
    return res.redirect("/home");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "작성하기",
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
  const { date, name, address, phNumber, service } = req.body;
  const list = await List.exists({ _id: id });
  if (!list) {
    return res.render("404", { pageTitle: "List not found" });
  }
  await List.findByIdAndUpdate(id, {
    date,
    name,
    address,
    phNumber,
    service: List.formatService(service),
  });
  return res.redirect(`/list/${id}`);
};

export const getDelete = async (req, res) => {
  const { id } = req.params;
  await List.findByIdAndDelete(id);
  return res.redirect("/home");
};

export const getReserved = async (req, res) => {
  const reservers = await Reservation.find({});
  return res.render("reserved", { pageTitle: "예약명단", reservers });
};

export const getReserve = (req, res) => {
  return res.render("reserve", { pageTitle: "에약하기" });
};
export const postReserve = async (req, res) => {
  const { date, name, phNumber, menu, order } = req.body;
  try {
    await Reservation.create({
      date,
      name,
      phNumber,
      menu: Reservation.formatReserver(menu),
      order,
    });
    return res.redirect("/reserver");
  } catch (error) {
    return res.render("reserve", {
      pageTitle: "예약하기",
      errorMessage: error._message,
    });
  }
};

export const getEditReserver = async (req, res) => {
  const { id } = req.params;
  const reserver = await Reservation.findById(id);
  return res.render("editReserver", { pageTitle: "예약수정", reserver });
};

export const postEditReserver = async (req, res) => {
  const { id } = req.params;
  const { date, name, phNumber, menu, order } = req.body;
  await Reservation.findByIdAndUpdate(id, {
    date,
    name,
    phNumber,
    menu: Reservation.formatReserver(menu),
    order,
  });
  return res.redirect("/reserver");
};

export const getDeleteReserver = async (req, res) => {
  const { id } = req.params;
  await Reservation.findByIdAndDelete(id);
  return res.redirect("/reserver");
};
