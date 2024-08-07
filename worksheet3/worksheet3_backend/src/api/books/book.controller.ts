import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { error } from 'console';
import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';

@Controller('api/books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get('/test')
    test() {
        return this.bookService.trst();
    }

    @Get('/')
    async findAll() {
        try {
            return this.bookService.findAll();
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No Books Found',
                },
                HttpStatus.NOT_FOUND,
                {cause: error}
            );
        }
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        try {
            return this.bookService.findOne(id);
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Book Not Found',
                },
                HttpStatus.NOT_FOUND,
                {cause: error}
            );
        }
    }

    @Post('/')
    async addBook(@Body() createBookDto: CreateBookDto) {
        try {
            await this.bookService.create(createBookDto);
            return { message: 'Book added susscessfully' };
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Undable to add book',
                },
                HttpStatus.BAD_REQUEST,
                {cause: error}
            );
        }
    }

    @Put('/:id')
    async updateBook(
        @Param('id') id: string,
        @Body() createBookDto: CreateBookDto,
    ) {
        try {
            await this.bookService.update(id, createBookDto);
            return { message: 'Book updated successfully' };
    } catch {
        throw new HttpException(
            {
                status: HttpStatus.BAD_REQUEST,
                error: 'Unable to update book',
            },
            HttpStatus.BAD_REQUEST,
            {cause: error}
            );
        }
    }

    @Delete('/:id')
    async deleteBook(@Param('id') id: string) {
        try {
            return await await this.bookService.delete(id);
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Book Not Found',
                },
                HttpStatus.NOT_FOUND,
                {cause: error}
            );
        }
    }
}