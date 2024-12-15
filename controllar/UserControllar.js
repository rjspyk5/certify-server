const { createUser, findUser } = require("../model/UserModel");

module.exports = {
  register: async (req, res) => {
    const { name, email } = req?.body;
    const isUserHave = await findUser(email);

    if (isUserHave) {
      return;
    } else {
      const result = await createUser(name, email);
      console.log(result);
    }
  },
};
