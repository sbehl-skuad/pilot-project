import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import DatabaseFilesService from './databaseFile.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private databaseFileService: DatabaseFilesService) {}

  @Get()
  getHello(): string {
    return "shobhit";
  }
  @Post('file-upload')
  @UseInterceptors(FileInterceptor('file1'))
  uploadFile(@UploadedFile() files){
    // console.log("xxx");
    // return "success";
    return this.databaseFileService.uploadDatabaseFile(files.buffer,files.originalname);
  }

}
