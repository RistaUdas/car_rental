module.exports = (sequelize, DataTypes) => {
    const CarListings = sequelize.define("CarListings", {
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        carName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        speed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gps: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        automatic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })
    return CarListings;
}