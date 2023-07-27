const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const userSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    age: { type: Date, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: 'Cart',
    },
  },
  { collection: 'users' }
);
userSchema.plugin(mongoosePaginate);

const User = model('User', userSchema);

module.exports = {
  User,
};
