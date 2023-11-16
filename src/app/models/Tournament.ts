// models/Tournament.ts
import mongoose, { Document } from 'mongoose';

interface Tournament extends Document {
  name: string;
  date: Date;
  participants: mongoose.Types.ObjectId[];
}

const tournamentSchema = new mongoose.Schema<Tournament>({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Tournament = mongoose.model<Tournament>('Tournament', tournamentSchema);

export default Tournament;
