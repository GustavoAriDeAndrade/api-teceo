import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, MinLength } from "class-validator";

/**
 * Classe para validação dos dados ao atualizar um usuário
 */
export class UpdateUserDto {
    
    @IsOptional()
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    name?: string

    @IsOptional()
    @IsNotEmpty({ message: 'O ID do grupo é obrigatório' })
    @IsNumber({}, { message: 'O ID do grupo deve ser um número' })
    groupId?: number
    
    @IsOptional()
    @IsBoolean({ message: 'O campo ativo deve ser um booleano' })
    isActive?: boolean

}
  
/**
 * Classe para atualização dos dados ao atualizar vários usuários
 */
export class UpdateUsersDto {

    @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
    @IsNumber({}, { message: 'O ID do usuário deve ser um número' })
    id: number

    @IsOptional()
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    name?: string

    @IsOptional()
    @IsNotEmpty({ message: 'O ID do grupo é obrigatório' })
    @IsNumber({}, { message: 'O ID do grupo deve ser um número' })
    groupId?: number

    @IsOptional()
    @IsBoolean({ message: 'O campo ativo deve ser um booleano' })
    isActive?: boolean

}