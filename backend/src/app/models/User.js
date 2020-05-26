import Sequelize, { Model } from "sequelize";
import { geoContains } from "d3-geo";
import Location from "./Location";

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                position: Sequelize.GEOMETRY,
            },
            { sequelize }
        );

        this.addHook("beforeSave", async user => {
            const locations = await Location.findAll();

            locations.forEach(location => {
                if (geoContains(location.boundaries, user.position.coordinates)) {
                  // add city_id field to the location
                  user.location_id = location.id;
                } else {
                  // keep city_id null
                }
              });
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Location, {
            foreignKey: "location_id",
            as: "location",
        });
    }
}

export default User;
