module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            location_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "locations",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
                allowNull: true,
            },
            position: {
                type: Sequelize.GEOMETRY,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable("users");
    },
};
