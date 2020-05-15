const moment = require("moment");
const { join } = require("path");
module.exports = class User {
  constructor({ currentUser, onChange }) {
    const userInterval = () => {
      console.log("用户检测");
      try {
        const { users } = require(join(process.cwd(), "./users.js"));
        const current = users.find(({ start, end }) => moment().isBetween(start, end, "[)"));
        if (!currentUser || (currentUser.id != current.id)) {
          onChange(current)
        }
      } catch (error) {
        console.error(error);
      }
    }
    userInterval();
    setInterval(userInterval, 60000)
  }
}