import { IsUUID, IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateFabricDto {
  @IsString()
  @IsNotEmpty()
  color: string;

  @IsInt()
  @Min(0)
  quantity: number;

  @IsString()
  @IsNotEmpty()
  type: string; 
  
  @IsUUID()
  userId: string; 
}
