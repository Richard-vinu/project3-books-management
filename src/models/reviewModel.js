const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const ReviewSchema = new mongoose.Schema({
    bookId: {
        type: ObjectId,
        required: true,
        ref: 'books'
    },

    reviewedBy: {
        type: String,
        default: 'Guest',
        trim: true,
        required:true
    },

    reviewedAt: {
        type: Date,
        required: true,
        default: Date.now()
    },

    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        trim: true
    },
    review: {
        type: String,
        trim: true
    },

    isDeleted: {
        type: Boolean,
        default: false
    },

}
    , { timestamps: true })

module.exports = mongoose.model('Review', ReviewSchema)