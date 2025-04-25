// filepath: /backend/models/User.js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['Admin', 'Teacher', 'Student', 'Parent'], default: 'Parent' },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] // Link to children
});