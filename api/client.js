import { creat, create } from "apisauce";

const apiClient = create({
  baseURL: "https://pickshare.herokuapp.com/users/challenge",
});

export default apiClient;

// apiClient.get("/getData").then((response) => {
//   if (!response.ok) {
//     response.problem;
//   }
// });
