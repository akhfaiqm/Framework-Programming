import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dito/create-book.dito.js';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '978-0-7432-7356-5',
      publishedYear: 1925,
      isAvailable: true,
    },
    {
      id: 2,
      title: 'To kill a mockingbriad',
      author: 'harper lee',
      isbn: '978-0-06-112008-4',
     publishedYear: 1960,
      isAvailable: false,
    },
  ];

  // logic untuk menampilkan data
  findAll(): Book[] {
    return this.books;
  }

  // simpan data baru
  simpanData(createBookDto: CreateBookDto): Book {
    // simpan data baru ke dalam array books
    const newBook: Book = {
      id: this.books.length + 1,
      title: createBookDto.title,
      author: createBookDto.author,
      isbn: createBookDto.isbn,
      publishedYear: createBookDto.publishedYear,
      isAvailable: true,
    };
    this.books.push(newBook);
    return newBook;
  }

  // logic untuk mengupdate data
  updateData(id: number, createBookDto: CreateBookDto): Book {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
      throw new Error(`Buku dengan id ${id} tidak ditemukan`);
    }

    const updatedBook: Book = {
      ...this.books[bookIndex],
      title: createBookDto.title,
      author: createBookDto.author,
      isbn: createBookDto.isbn,
      publishedYear: createBookDto.publishedYear,
    };

    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  // logic untuk menghapus data
  deletData(id: number): string {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
      throw new Error(`Buku dengan id ${id} tidak ditemukan`);
    }

    this.books.splice(bookIndex, 1);
    return `Buku dengan id ${id} berhasil dihapus`;
  }
}

