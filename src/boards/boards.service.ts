import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { v1 as uuid } from 'uuid';
import { Board } from './ board.entity';
import { BoardStatus } from './board-status.enum';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
    ){}

    async getAllBoards() : Promise<Board[]> {
        return this.boardRepository.find();
    }
    
   async getBoardById(id: number): Promise <Board> {
        const found = await this.boardRepository.findOne(id)
        if(!found) {
            throw new NotFoundException(`Can't find board with id: #${id}`);
        }
        return found;
    }
    
    createBoard(createBoardDto: CreateBoardDto): Promise <Board>  {
        return this.boardRepository.createBoard(createBoardDto);
    }

    async deletBoard(id: number): Promise <void> {
        const result = await this.boardRepository.delete(id);
        
        if (result.affected === 0) {
            throw new NotFoundException(`Can't find board with id: ${id}`);
        }
    }

    async updateBoardStatus(id:number, status: BoardStatus): Promise<Board> {
        const board = await this.getBoardById(id);
        board.status = status;
        await this.boardRepository.save(board);
        return board ;
    }
    // async getBoardById(id: string): Board {
    //     const found = this.boards.find( board => board.id === id );
    //     if(!found) {
    //         throw new NotFoundException(`Cant' find #${id} post`);
    //     }
    //     return found;
    // }
    

    // async deleteBorad(id: string): void {
    //     const found = this.getBoardById(id);

    //     this.boards = this.boards.filter( board => board.id !== found.id);
    // }

    // async updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
