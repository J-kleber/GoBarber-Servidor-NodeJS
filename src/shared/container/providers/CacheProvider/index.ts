import { container } from 'tsyringe';
import ICacheProvider from './models/ICacheProvider';
import RedisCacheProvider from './implementations/RedisCacheProvider';

const providers = {
  redis: RedisCacheProvider,
};

// quando o construtor precisa ser instanciado
// quando precisa registrar uma única vez
container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
