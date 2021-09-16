const USER_API_URL = "https://jsonplaceholder.typicode.com/users";

const userAPI = {
  async fetchUsers() {
    const result = await fetch(USER_API_URL);
    return result.json();
  },
};

export default userAPI;