const getUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return user;
  } else {
    return false;
  }
};

export { getUser };
