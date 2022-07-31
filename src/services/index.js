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

export const checkUsername = async (data) => {
  try {
    const res = await request.get("/api/check/username", {
      params: {
        q: data,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const checkEmail = async (data) => {
  try {
    const res = await request.get("/api/check/email", {
      params: {
        q: data,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
