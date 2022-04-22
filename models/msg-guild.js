const mongoose = require('mongoose')

const { Schema } = mongoose

const reqString = {

    type: String,

    required: true,

}

const schema = new Schema(

    {


        guildId: { type: String },

        countId: { type: Number, default: 0 },

    },

    {

        timestamps: true,

    }

)

const name = 'msgguild'

module.exports = mongoose.models[name] || mongoose.model(name, schema)