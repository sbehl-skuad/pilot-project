import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import DatabaseFile from './databaseFile.entity';
 
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public name: string;
 
  @JoinColumn({ name: 'avatarId' })
  @OneToOne(
    () => DatabaseFile,
    {
      nullable: true
    }
  )
  public avatar?: DatabaseFile;
 
  @Column({ nullable: true })
  public avatarId?: number;
 
  // ...
}
 
export default User;