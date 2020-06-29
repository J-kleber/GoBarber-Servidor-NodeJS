import { hash, compare } from 'bcryptjs';
import IHashPovider from '../models/IHashProvider';

export default class BCryptHashProvider implements IHashPovider {
  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }

  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }
}
