import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board } from './ board.entity';
import { BoardStatus } from './board-status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService){} // Dependency Inejction 부분입니다.
    
//     @Get('/')
//     getAllBoard(): Board[] {
//         return this.boardService.getAllBoards();
//     }
    @Get()
    getAllBoards(): Promise<Board[]> {
        return this.boardService.getAllBoards();
    }

    @Get('/:id')
    getBoardById(
        @Param('id') id: number): Promise<Board> {
        return this.boardService.getBoardById(id);
    }
    
    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoradDto: CreateBoardDto): Promise<Board> {
        return this.boardService.createBoard(createBoradDto);
    }
    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
       return this.boardService.deletBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus ): Promise<Board> {
        return this.boardService.updateBoardStatus(id, status);
    }

//     @Delete('/:id')
//     deleteBoard(@Param('id') id: string ): void {
//         this.boardService.deleteBorad(id);
//     }
    
//     @Patch('/:id/status')
    
//     updateBoardStatus(
//         @Param('id') id: string,
//         @Body('status', BoardStatusValidationPipe) status: BoardStatus ) {
//         return this.boardService.updateBoardStatus(id, status);
//     }
}
