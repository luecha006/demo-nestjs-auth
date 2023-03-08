import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true }) //ห้ามซ้ำ
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;
}
