import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                position: Sequelize.GEOMETRY,
            },
            { sequelize }
        );

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
