import { DataSource } from 'typeorm';
import { user } from '../user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'anasomar12',
        database: 'ghureberai',
        entities: [user],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];