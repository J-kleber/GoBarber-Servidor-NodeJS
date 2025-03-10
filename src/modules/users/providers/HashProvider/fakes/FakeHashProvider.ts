import IHashPovider from '../models/IHashProvider';

export default class FakeHashProvider implements IHashPovider {
  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }

  public async generateHash(payload: string): Promise<string> {
    return payload;
  }
}
