module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        id_team: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        trainer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Trainers',
                key: 'id_trainer'
            }
        },
        team_name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        battle_points: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_pokemon: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });

    return Team;
};
