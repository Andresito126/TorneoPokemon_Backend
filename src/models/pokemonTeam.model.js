module.exports= (sequelize, DataTypes)=>{
 
    const PokemonTeam = sequelize.define ('PokemonTeam', {

        id_pokemon_team:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },

        team_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Teams',
                key: 'id_team'
            }
        },

        pokemon_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pokemon_name: {
            type: DataTypes.STRING,
            allowNull: false
        }   
    },{ timestamps: false });


    return PokemonTeam;

};
