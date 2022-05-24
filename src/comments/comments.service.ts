import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  async create(user: User, createCommentDto: CreateCommentDto) {
    return 'This action adds a new comment';
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
