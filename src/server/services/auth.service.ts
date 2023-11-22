import bcrypt from "bcrypt";
import UserDTO, { UserRegisterDTO } from "../dto/UserDTO";
import TokenService from "./token.service";
import UserDAO from "../dao/userDao";


class AuthService {
  async login({ user, password }: Partial<UserDTO>): Promise<string> {
    const _user = await UserDAO.getUserByUser(user as string);

    if (!_user || !bcrypt.compareSync(password as string, _user.password)) {
      throw new Error("Credenciales incorrectas");
    }

    const token = TokenService.generateToken({
      id: _user._id,
      user: _user.user,
    });

    return token;
  }

  async register(userDTO: UserRegisterDTO): Promise<string> {
    console.log('userDTO :>> ', userDTO);
    const hashedPassword = bcrypt.hashSync(userDTO.password as string, 10);

    await UserDAO.createUser({
      ...userDTO,
      password: hashedPassword,
    });

    return "Registro exitoso";
  }
}

export default AuthService;
