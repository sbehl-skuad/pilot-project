import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseFile from './databaseFile.entity';
import {DatabaseFileModule} from './databaseFile.module';

@Module({
  //Databse credentials insert below
  imports: [DatabaseFileModule,
  TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"test_user",
    password:"test",
    database:"skuad",
    synchronize:true,
    entities:[DatabaseFile],
    autoLoadEntities:true,
 }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
