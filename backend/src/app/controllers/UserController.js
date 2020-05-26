import User from "../models/User";

class UserController {
    async store(req, res) {
        const { name, geometry: position } = req.body;
        const user = await User.create({ name, position });

        return res.json(user);
    }
}

export default new UserController();
