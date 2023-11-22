// dao/userDAO.ts
import UserDTO from '../dto/UserDTO';
import User from '../models/User';

class UserDAO {
  static async createUser(user: Partial<UserDTO>) {
    if(!user.role){
      user.role = 'user'
    }
    const newUser = new User({ ...user });
    return await newUser.save();
  }

  static async getUserByUser(user: string) {
    const all = await User.find()
    console.log('all :>> ', all);
    return await User.findOne({ user });
  }

  // Agregar métodos adicionales según sea necesario como Favs
}

export default UserDAO;
