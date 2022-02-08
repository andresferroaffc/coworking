
import { usuario } from 'src/user/ENTITIES';
import { Column, Entity, PrimaryGeneratedColumn,OneToOne } from 'typeorm';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, unique: true })
  name: string;
  @Column({ nullable: false, unique: true })
  code: string;



@OneToOne(_ => usuario, (usuario) => usuario.role)
usuario: usuario;
}
