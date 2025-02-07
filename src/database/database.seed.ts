import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../users/entities/group.entity';

@Injectable()
export class DatabaseSeed implements OnModuleInit {
    
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ){}

  /**
   * Função para garantir a criação dos grupos de usuário
   */
  async onModuleInit() {

    const existingGroups = await this.groupRepository.count()
    
    // Verifica se já existem grupos no banco para não duplicar dados
    if(existingGroups === 0){

      const defaultGroups = [
        { name: 'Administrador', isActive: true },
        { name: 'Monitor', isActive: true },
        { name: 'Vendedor', isActive: true },
      ]

      await this.groupRepository.save(defaultGroups)

      console.log('Grupos criados com sucesso!')

    }
  }
}