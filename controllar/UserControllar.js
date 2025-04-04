const { createUser, findUser } = require("../model/UserModel");

module.exports = {
  register: async (req, res) => {
    const { name, email } = req?.body;
    const isUserHave = await findUser(email);

    if (isUserHave) {
      return;
    } else {
      const result = await createUser(name, email);
      return res.send(result);
    }
  },

  getUser: async (req, res) => {
    const email = req.params?.email;
    console.log(email);
    const result = await findUser(email);

    return res.send(result);
  },
};
