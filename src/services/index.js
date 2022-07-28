import * as request from "../utils/httpRequest";

export const login = async (data) => {
  try {
    const res = await request.post("login", {
      ...data,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (data) => {
  try {
    const res = await request.post("/api/users", {
      ...data,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
