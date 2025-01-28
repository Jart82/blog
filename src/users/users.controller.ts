import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(params);
    console.log(query);
    return 'You sent a get request to user endpoint';
  }

  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'You sent a post request to user endpoint';
  }
}
