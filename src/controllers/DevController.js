const Dev = require("../models/Dev");
const axios = require("axios");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );
    const { name = login, avatar_url, bio } = response.data;
    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };
    const techs_array = parseStringAsArray(techs);

    const dev_exists = await Dev.findOne({ github_username });

    if (dev_exists) {
      return res.json({ error: "Usuário já acadstrado" });
    }
    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techs_array,
      location
    });
    return res.json(dev);
  }
};
