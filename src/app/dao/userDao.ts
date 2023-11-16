// dao/userDAO.ts
import User from '../models/User';

class UserDAO {
  static async createUser(username: string, password: string, role: 'admin' | 'regular') {
    const newUser = new User({ username, password, role });
    return await newUser.save();
  }

  static async getUserByUsername(username: string) {
    return await User.findOne({ username });
  }

  // Agregar métodos adicionales según sea necesario
}

export default UserDAO;
