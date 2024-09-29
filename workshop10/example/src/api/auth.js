const signUp = async (user) => {
  const url =
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register";
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await resp.json();
  if (resp.ok) {
    return data;
  }
  throw new Error(data.msg);
};
const signIn = async (user) => {
  const url =
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login";
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await resp.json();
  if (resp.ok) {
    return data;
  }
  throw new Error(data.msg);
};

export { signIn, signUp };
