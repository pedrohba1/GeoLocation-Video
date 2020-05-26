import Sequelize, { Model } from "sequelize";

class Location extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                boundaries: Sequelize.GEOMETRY,
            },
            { sequelize }
        );

        return this;
    }
}

export default Location;
