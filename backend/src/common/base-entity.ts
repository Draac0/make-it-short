import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  @ApiProperty()
  id: string;

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  @ApiProperty()
  createdAt: Date;

  @UpdateDateColumn({ nullable: false, name: 'updated_at' })
  @ApiProperty()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  @ApiProperty()
  deletedAt: Date;
}
