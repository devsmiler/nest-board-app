import { User } from 'src/auth/user.entity';
import { Board } from 'src/boards/ board.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  // 한명의 유저는 여러개의 코멘트를 가질수 있다.
  @ManyToOne(() => User, (user) => user.id)
  user: number;

  @ManyToOne(() => Board, (board) => board.id)
  board: number;

  @Column({ nullable: false })
  contents: string;
}
