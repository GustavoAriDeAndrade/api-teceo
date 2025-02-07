import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUsersDto } from './dto/update-user.dto';

/**
 * Rotas para manipulação dos usuários
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Rota para criação de um novo usuário
   * @param createUserDto 
   * @returns 
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  /**
   * Rota para paginação dos usuários
   * @param page 
   * @param limit 
   * @returns 
   */
  @Get()
  findAll(
    @Query('page') page: number = 1, 
    @Query('limit') limit: number = 10
  ){ 
    return this.usersService.findAll(Number(page), Number(limit))
  }

  /**
   * Rota para atualização de um usuário
   * @param id 
   * @param updateUserDto 
   * @returns 
   */
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto){
    return this.usersService.updateUser(Number(id), updateUserDto)
  }

  /**
   * Rota para atualização de vários usuários
   * @param updateUsersDto 
   * @returns
   */
  @Post('bulk-update')
  updateInBulk(@Body() updateUsersDto: UpdateUsersDto[]){
    return this.usersService.updateUsersInBulk(updateUsersDto)
  }
}
