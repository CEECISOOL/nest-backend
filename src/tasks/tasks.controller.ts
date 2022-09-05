import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Response } from 'express';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){

    }

    @Get() //'/test' -> para que la url sea tasks/test
    getTasks(): Promise<Task[]> {
        return this.taskService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId: string){
        return this.taskService.getTask(taskId)
    }

    @Get('/express')  //no es recomendado, ya que nest tiene su manera de hacerlo
    getTak(@Req() req, @Res() res): Response{
        return res.send('Hello, usando express')
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<Task>{
        return this.taskService.createTask(task)
    }

    @Put(':id')
    updateTask(@Body() task:CreateTaskDto, @Param('id') id): string{
        console.log(task, id)
        return 'Updating a task'
    }

    @Delete(':id')
    deleteTaks(@Param('id') id): string{
        console.log(id)
        return `Deleting a taks number: ${id}`
    }
}
