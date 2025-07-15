// config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => {
  const entitiesPath = [__dirname + '/../**/*.entity{.ts,.js}'];

  console.log('🗺️ TypeORM entities glob:', entitiesPath);

  return {
    type: 'mysql',
    host: configService.get<string>('db.host'),
    port: configService.get<number>('db.port'),
    username: configService.get<string>('db.username'),
    password: configService.get<string>('db.password'),
    database: configService.get<string>('db.database'),
    entities: entitiesPath,
    synchronize: true,
  };
};
