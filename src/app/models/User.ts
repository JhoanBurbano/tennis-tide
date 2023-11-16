// models/User.ts
import mongoose, { Document } from 'mongoose';

interface User extends Document {
  username: string;
  password: string;
  role: 'admin' | 'regular';
}

const userSchema = new mongoose.Schema<User>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'regular'], default: 'regular' },
});

const User = mongoose.model<User>('User', userSchema);

export default User;
