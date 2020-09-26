import client from "./client";

const endpoint = "/getData";

const getUsers = () => client.get(endpoint);

export default {
  getUsers,
};
