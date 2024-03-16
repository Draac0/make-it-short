import { BaseEntity } from '../../common/base-entity';
import { Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column({ name: 'first_name', nullable: false })
  @ApiProperty()
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  @ApiProperty()
  lastName: string;

  @Column({ name: 'email', nullable: false })
  @ApiProperty()
  email: string;

  @Column({ name: 'password', nullable: false })
  @ApiProperty()
  password: string;
}
