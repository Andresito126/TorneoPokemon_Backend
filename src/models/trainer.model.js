module.exports= (sequelize, DataTypes)=>{
    const Trainer = sequelize.define('Trainer',{
        id_trainer:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        region:{
            type:DataTypes.STRING,
            allowNull: false
        },
        experience:{
            type:DataTypes.INTEGER,
            allowNull:null
        },
        favorite_type:{
            type:DataTypes.STRING,
            allowNull:false
        }

    },{ timestamps: false });



    return Trainer;
};