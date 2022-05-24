import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @MinLength(1)
  readonly contents: string;

  @IsNumber()
  readonly boardId: number;

  @IsNumber()
  readonly userId: number;
}
