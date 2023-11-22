import mongoose, { Document, Schema } from 'mongoose';
import UserDTO from '../dto/UserDTO';

const userSchema = new mongoose.Schema<UserDTO>({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  role: { type: String, enum: ['admin', 'user'], required: true },
  user: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Tournament' }], 
  wins: [{ type: Schema.Types.ObjectId, ref: 'Tournament' }],
});

export default mongoose.models.User || mongoose.model<UserDTO>('User', userSchema);
