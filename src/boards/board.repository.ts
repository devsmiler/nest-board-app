import { EntityRepository ,Repository } from "typeorm";
import { Board } from "./ board.entity";
import { BoardStatus } from "./board-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";



@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
    async createBoard(createBoradDto: CreateBoardDto) : Promise<Board> {
        const { title, description } = createBoradDto;

        const board: Board = this.create({
            title,
            description,
            status:BoardStatus.PUBLIC,
        })
        await this.save(board)
        return board;
    }
}