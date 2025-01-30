import { Controller, Get, Param, Post, Query, Body, Headers, Ip, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param('id', ParseIntPipe) id: number | undefined, @Query('limit', ParseIntPipe) limit: number) {
    console.log(typeof id);
    console.log(typeof limit);
    return 'You sent a get request to user endpoint';
  }

  @Post()
  public createUsers(
    @Body('email') email: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(email);
    console.log(headers);
    console.log(ip);
    return 'You sent a post request to user endpoint';
  }
}
