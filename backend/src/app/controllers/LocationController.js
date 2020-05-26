import Location from "../models/Location";

class LocationController {
    async store(req, res) {
        const { name, geometry: boundaries } = req.body;

        const location = await Location.create({ name, boundaries });

        return res.json(location);
    }
}

export default new LocationController();
