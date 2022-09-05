import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ceecisool:ceecisool@cluster0.xdril4y.mongodb.net/?retryWrites=true&w=majority' ,
  {
    useNewUrlParser:true,
  }
  ),
  TasksModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
