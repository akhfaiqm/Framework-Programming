import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dito/create-book.dito.js';

@Controller('book')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    // menampilka data buku
    @Get()
    findAll(): any{
        return this.booksService.findAll();
    }

    //menyimpan data baru
    @Post()
    simpanData(@Body() createBookDto: CreateBookDto){
        return this.booksService.simpanData(createBookDto);
    }

    // // mengupdate data 
    // @Put(':id')
    // updateData(
    //     @Param('id') id: string,
    //     @Body() createBookDto: CreateBookDto): any {
    //     return this.booksService.updateData(parseInt(id), createBookDto);
    // }

    // // menghapus data
    // @Delete(':id')
    // deletData(
    //     @Param('id') id: string): string {
    //     return this.booksService.deletData(parseInt(id));
    // }
    
}
