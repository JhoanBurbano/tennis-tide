// api/services/TokenService.ts
import jwt from 'jsonwebtoken';

class TokenService {
  private static readonly SECRET_KEY = process.env.SECRET_KEY as string; // Reemplaza con tu clave secreta

  static generateToken(payload: Record<string, any>): string {
    return jwt.sign(payload, TokenService.SECRET_KEY, { expiresIn: '1h' });
  }

  static verifyToken(token: string): Record<string, any> | null {
    try {
      const decoded = jwt.verify(token, TokenService.SECRET_KEY);
      return decoded as Record<string, any>;
    } catch (error) {
      console.error('Error al verificar el token:', (error as Record<string, any>).message);
      return null;
    }
  }
}

export default TokenService;
