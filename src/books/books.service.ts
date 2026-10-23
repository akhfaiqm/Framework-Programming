import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dito/create-book.dito.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ){}

  // logic untuk menampilkan data
  async findAll(): Promise<Book[]> {
    // select * from book 
    return await this.bookRepository.find({
      order:{createdAt:'DESC'}
    })
  }

  // simpan data baru
  async simpanData(createBookDto: CreateBookDto): Promise<Book> {
    // simpan data baru ke dalam array books
    const newBook = this.bookRepository.create(createBookDto);
    
    return await this.bookRepository.save(newBook);
  }

  // // logic untuk mengupdate data
  // updateData(id: number, createBookDto: CreateBookDto): Book {
  //   const bookIndex = this.books.findIndex(book => book.id === id);
  //   if (bookIndex === -1) {
  //     throw new Error(`Buku dengan id ${id} tidak ditemukan`);
  //   }

  //   const updatedBook: Book = {
  //     ...this.books[bookIndex],
  //     title: createBookDto.title,
  //     author: createBookDto.author,
  //     isbn: createBookDto.isbn,
  //     publishedYear: createBookDto.publishedYear,
  //   };

  //   this.books[bookIndex] = updatedBook;
  //   return updatedBook;
  // }

  // // logic untuk menghapus data
  // deletData(id: number): string {
  //   const bookIndex = this.books.findIndex(book => book.id === id);
  //   if (bookIndex === -1) {
  //     throw new Error(`Buku dengan id ${id} tidak ditemukan`);
  //   }

  //   this.books.splice(bookIndex, 1);
  //   return `Buku dengan id ${id} berhasil dihapus`;
  }


