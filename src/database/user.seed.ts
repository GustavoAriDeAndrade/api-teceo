import { Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UserSeeder implements OnModuleInit {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}

  async onModuleInit() {

    const existingUsers = await this.userRepository.count()

    if(existingUsers === 0){

        const users = [
            { name: 'Gustavo Andrade', isActive: true, groupId: 3 },
            { name: 'Rafael Costa', isActive: true, groupId: 3 },
            { name: 'Fernanda Lima', isActive: true, groupId: 1 },
            { name: 'Bruno Almeida', isActive: true, groupId: 2 },
            { name: 'Camila Rocha', isActive: true, groupId: 3 },
            { name: 'Daniel Oliveira', isActive: true, groupId: 1 },
            { name: 'Isabela Martins', isActive: true, groupId: 2 },
            { name: 'Gustavo Mendes', isActive: true, groupId: 3 },
            { name: 'Tatiane Ramos', isActive: true, groupId: 1 },
            { name: 'Rodrigo Nunes', isActive: true, groupId: 2 },
            { name: 'Juliana Santos', isActive: true, groupId: 3 },
            { name: 'Vinicius Duarte', isActive: true, groupId: 1 },
            { name: 'Patricia Carvalho', isActive: true, groupId: 2 },
            { name: 'Thiago Ribeiro', isActive: true, groupId: 3 },
            { name: 'Carla Monteiro', isActive: true, groupId: 1 },
            { name: 'Eduardo Cardoso', isActive: true, groupId: 2 },
            { name: 'Renata Silva', isActive: true, groupId: 3 },
            { name: 'Diego Vasconcelos', isActive: true, groupId: 1 },
            { name: 'Amanda Figueiredo', isActive: true, groupId: 2 },
            { name: 'Leonardo Pinheiro', isActive: true, groupId: 3 },
            { name: 'Sabrina Teixeira', isActive: true, groupId: 1 },
            { name: 'Fábio Moreira', isActive: true, groupId: 2 },
            { name: 'Bruna Batista', isActive: true, groupId: 3 },
            { name: 'Ricardo Moura', isActive: true, groupId: 1 },
            { name: 'Beatriz Cunha', isActive: true, groupId: 2 },
            { name: 'Roberto Guimarães', isActive: true, groupId: 3 },
            { name: 'Natália Barbosa', isActive: true, groupId: 1 },
            { name: 'André Lopes', isActive: true, groupId: 2 },
            { name: 'Vanessa Tavares', isActive: true, groupId: 3 },
            { name: 'Felipe Rocha', isActive: true, groupId: 1 },
            { name: 'Lorena Martins', isActive: true, groupId: 2 },
            { name: 'Pedro Henrique', isActive: true, groupId: 3 },
            { name: 'Joana Melo', isActive: true, groupId: 1 },
            { name: 'Fernando Cruz', isActive: true, groupId: 2 },
            { name: 'Michele Pereira', isActive: true, groupId: 3 },
            { name: 'José Augusto', isActive: true, groupId: 1 },
            { name: 'Tatiana Mendes', isActive: true, groupId: 2 },
            { name: 'Henrique Almeida', isActive: true, groupId: 3 },
            { name: 'Ana Beatriz', isActive: true, groupId: 1 },
            { name: 'Sérgio Fernandes', isActive: true, groupId: 2 },
            { name: 'Caroline Gomes', isActive: true, groupId: 3 },
            { name: 'Guilherme Santos', isActive: true, groupId: 1 },
            { name: 'Tatiane Lopes', isActive: true, groupId: 2 },
            { name: 'Emanuelly Moura', isActive: true, groupId: 3 },
            { name: 'Mateus Barros', isActive: true, groupId: 1 },
            { name: 'Viviane Ribeiro', isActive: true, groupId: 2 },
            { name: 'Jonathan Peixoto', isActive: true, groupId: 3 },
            { name: 'Camila Fernandes', isActive: true, groupId: 1 },
            { name: 'Viviane Moura', isActive: true, groupId: 2 },
            { name: 'Jonathan Ribeiro', isActive: true, groupId: 3 },
            { name: 'Camila Peixoto', isActive: true, groupId: 1 },
            { name: 'Vanessa Viviane', isActive: true, groupId: 3 },
            { name: 'Felipe Mateus', isActive: true, groupId: 1 },
            { name: 'Lorena Tatiane', isActive: true, groupId: 2 },
            { name: 'Pedro Fernando', isActive: true, groupId: 3 },
            { name: 'Lucas José', isActive: true, groupId: 1 },
            { name: 'Mariana Emanuelly', isActive: true, groupId: 2 },
            { name: 'Rafael Gomes', isActive: true, groupId: 3 },
            { name: 'Fernanda Moura', isActive: true, groupId: 1 },
            { name: 'Bruno Barros', isActive: true, groupId: 2 },
            { name: 'Fábio Moreira', isActive: true, groupId: 2 },
            { name: 'Bruna Cunha', isActive: true, groupId: 3 },
            { name: 'Ricardo Fábio', isActive: true, groupId: 1 },
            { name: 'Beatriz Gomes', isActive: true, groupId: 2 },
            { name: 'Adriana Oliveira', isActive: true, groupId: 1 },
            { name: 'Bruno Santana', isActive: true, groupId: 2 },
            { name: 'Caroline Andrade', isActive: true, groupId: 3 },
            { name: 'Daniela Mendes', isActive: true, groupId: 1 },
            { name: 'Eduardo Nascimento', isActive: true, groupId: 2 },
            { name: 'Fernanda Barros', isActive: true, groupId: 3 },
            { name: 'Gabriel Silva', isActive: true, groupId: 1 },
            { name: 'Helena Costa', isActive: true, groupId: 2 },
            { name: 'Igor Fernandes', isActive: true, groupId: 3 },
            { name: 'Jéssica Lima', isActive: true, groupId: 1 },
            { name: 'Kleber Rocha', isActive: true, groupId: 2 },
            { name: 'Larissa Teixeira', isActive: true, groupId: 3 },
            { name: 'Marcelo Moreira', isActive: true, groupId: 1 },
            { name: 'Natália Vasconcelos', isActive: true, groupId: 2 },
            { name: 'Otávio Cardoso', isActive: true, groupId: 3 },
            { name: 'Patrícia Ribeiro', isActive: true, groupId: 1 },
            { name: 'Rodrigo Batista', isActive: true, groupId: 2 },
            { name: 'Simone Moura', isActive: true, groupId: 3 },
            { name: 'Thiago Lopes', isActive: true, groupId: 1 },
            { name: 'Ursula Almeida', isActive: true, groupId: 2 },
            { name: 'Vitor Martins', isActive: true, groupId: 3 },
            { name: 'Wellington Santos', isActive: true, groupId: 1 },
            { name: 'Xavier Pinheiro', isActive: true, groupId: 2 },
            { name: 'Yasmin Cunha', isActive: true, groupId: 3 },
            { name: 'Zélia Barbosa', isActive: true, groupId: 1 },
            { name: 'Antônio Souza', isActive: true, groupId: 2 },
            { name: 'Beatriz Duarte', isActive: true, groupId: 3 },
            { name: 'Carlos Henrique', isActive: true, groupId: 1 },
            { name: 'Debora Monteiro', isActive: true, groupId: 2 },
            { name: 'Eliane Mendes', isActive: true, groupId: 3 },
            { name: 'Fábio Guimarães', isActive: true, groupId: 1 },
            { name: 'Giselle Barbosa', isActive: true, groupId: 2 },
            { name: 'Humberto Carvalho', isActive: true, groupId: 3 },
            { name: 'Isis Ribeiro', isActive: true, groupId: 1 },
            { name: 'Jonas Nogueira', isActive: true, groupId: 2 },
            { name: 'Kelly Vasconcelos', isActive: true, groupId: 3 },
            { name: 'Lucas Tavares', isActive: true, groupId: 1 },
            { name: 'Mariana Peixoto', isActive: true, groupId: 2 },
            { name: 'Nicolas Moura', isActive: true, groupId: 3 },
            { name: 'Olívia Fernandes', isActive: true, groupId: 1 },
            { name: 'Paulo Cardoso', isActive: true, groupId: 2 },
            { name: 'Quésia Rocha', isActive: true, groupId: 3 },
            { name: 'Renato Teixeira', isActive: true, groupId: 1 },
            { name: 'Sabrina Moreira', isActive: true, groupId: 2 },
            { name: 'Tadeu Lima', isActive: true, groupId: 3 },
            { name: 'Ulysses Silva', isActive: true, groupId: 1 },
        ];
      
        await this.userRepository.save(users)
    
        console.log('Usuários criados com sucesso!')

    }
  }
}