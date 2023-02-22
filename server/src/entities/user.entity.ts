import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../config/base.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column()
  username!: string;
  @Column()
  lastname!: string;
  @Column()
  password!: string;
  @Column()
  numberPhone!: number;
  @Column({ nullable: true })
  rol?: string;
}
