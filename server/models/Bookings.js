module.exports = (sequelize, DataTypes) => {
    const Bookings = sequelize.define("Bookings", {

        UsersId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        CarId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        PickupDateTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ReturnDateTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        TotalPrice: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },

    });

    return Bookings;
}