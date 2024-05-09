module.exports = new (class {
  //RIGESTER NEWUSER
  async register(req, res) {
    try {
      console.log("register User Done!");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //LOGIN USER
  async login(req, res) {
    try {
      console.log("login Doned!");
    } catch (error) {
      res.status(500).json(error);
    }
  }
})();
