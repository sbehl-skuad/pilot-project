import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseFilesService from './databaseFile.service';
import DatabaseFile from './databaseFile.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DatabaseFile])],
    providers:[DatabaseFilesService],
    controllers:[],
    exports:[DatabaseFilesService],
})
export class DatabaseFileModule{}