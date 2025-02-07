import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUsersDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

/**
 * Classe contendo o CRUD de usuários
 */
@Injectable()
export class UsersService{

  constructor(
    // para realizarmos querys na tabela de usuários
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    // para realizarmos querys na tabela de grupo
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ){}

  /**
   * Realiza o cadastro de um novo usuário
   * @param createUserDto 
   * @returns 
   */
  async create(createUserDto: CreateUserDto): Promise<User>{

    const { name, groupId, isActive } = createUserDto

    const existingUser = await this.userRepository.findOne({ where: { name } })

    if(existingUser){
      throw new BadRequestException('Nome de usuário já existe')
    }

    const group = await this.groupRepository.findOne({ where: { id: groupId } })

    if(!group){
      throw new BadRequestException('Grupo inválido')
    }

    const newUser = this.userRepository.create({
      name,
      isActive,
      groupId,
    })

    return this.userRepository.save(newUser)

  }

  /**
   * Retorna a paginação dos usuários
   * @param page 
   * @param limit 
   * @returns 
   */
  async findAll(page: number = 1, limit: number = 10){

    const [users, total] = await this.userRepository.findAndCount({
      relations: ['group'], 
      select: ['id', 'name', 'isActive'], 
      skip: (page - 1) * limit, 
      take: limit, 
      order: { id: 'ASC' }
    })
  
    return {
      data: users.map(user => ({
        id: user.id,
        name: user.name,
        isActive: user.isActive,
        group: user.group?.name, 
      })),
      total, 
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  }

  /**
   * Função para atualizar os dados de um único usuário
   * @param id 
   * @param updateUserDto 
   * @returns 
   */
  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>{

    const user = await this.userRepository.findOne({ where: { id } })

    if(!user){
      throw new NotFoundException('Usuário não encontrado')
    }
  
    Object.assign(user, updateUserDto)
    
    return this.userRepository.save(user)

  }

  /**
   * Função para atualizar varios usuários de uma vez
   * @param updateUsersDto 
   * @returns 
   */
  async updateUsersInBulk(updateUsersDto: UpdateUsersDto[]): Promise<User[]>{

    const updatedUsers: User[] = []
  
    for(const updateUserDto of updateUsersDto){

      const user = await this.userRepository.findOne({ where: { id: updateUserDto.id } })

      if(!user) continue
  
      Object.assign(user, updateUserDto)

      const updatedUser = await this.userRepository.save(user)

      updatedUsers.push(updatedUser)

    }
  
    return updatedUsers

  }
}
