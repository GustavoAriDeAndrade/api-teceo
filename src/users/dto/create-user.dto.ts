import { IsNotEmpty, IsNumber, IsBoolean, MinLength } from 'class-validator';

/**
 * Classe para validação dos dados ao tentar criar um usuário
 */
export class CreateUserDto {
    
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    name: string

    @IsNotEmpty({ message: 'O ID do grupo é obrigatório' })
    @IsNumber({}, { message: 'O ID do grupo deve ser um número' })
    groupId: number

    @IsBoolean({ message: 'O campo ativo deve ser um booleano' })
    isActive: boolean
    
}