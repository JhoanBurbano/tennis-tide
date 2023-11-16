// dao/tournamentDAO.ts
import mongoose from 'mongoose';
import Tournament from '../models/Tournament';

class TournamentDAO {
  static async createTournament(name: string, date: Date, participants: mongoose.Types.ObjectId[]) {
    const newTournament = new Tournament({ name, date, participants });
    return await newTournament.save();
  }

  static async getTournaments() {
    return await Tournament.find().populate('participants', 'username');
  }

  static async getTournamentById(tournamentId: mongoose.Types.ObjectId) {
    return await Tournament.findById(tournamentId).populate('participants', 'username');
  }

  // Agregar métodos para actualizar y eliminar torneos según sea necesario
}

export default TournamentDAO;
