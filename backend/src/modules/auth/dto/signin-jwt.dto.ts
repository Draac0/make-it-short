import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignInJwtDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  roleId: string; // TODO: Create a Role table and use it here
}
