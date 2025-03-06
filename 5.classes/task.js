class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = state;
      this.type = type;
    }

    fix(){
      this.state *= 1.5;
    }

    set state(newState) {
      if(newState <= 0) {
        this._state = 0;
      } else if (newState >= 100){
        this._state = 100;
      } else {this._state = newState;}

      }
    get state() {
      return this._state;
    }
    }

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = 'magazine') {
    super(name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount, state = 100, type = 'book') {
    super(name, releaseDate, pagesCount, state);
    this.type = type;
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state = 100, type = 'novel') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state = 100, type = 'fantastic') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state = 100, type = 'detective') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class Library extends PrintEditionItem{
  constructor (name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state, type);
    this.name = name;
    this.books = [];
    this.state = state;
    this.type = type;
  }

  addBook(book) {
    if(book.state  >= 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value){
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName){
    const index = this.books.map(book => book.name).indexOf(bookName);
    return index === -1 ? null : this.books.splice(index, 1)[0];
  }
}

class Student {
  constructor (name, marks) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (2 <= mark) {
      if (mark <= 5) {
        if(this.marks.hasOwnProperty(subject) === false) {
          this.marks[subject] = [];
          return this.marks[subject].push(mark)}
        else return this.marks[subject].push(mark);
        }
      }
    }

    getAverageBySubject(subject) {
    if(this.marks.hasOwnProperty(subject)) {
      return this.marks[subject].reduce((a, b) => a + b / this.marks[subject].length, 0);
    }
    else return 0;
    }

    getAverage() {
      return Object.keys(this.marks).reduce((a, b) =>
        a + this.getAverageBySubject([b]) / Object.keys(this.marks).length,
        0);
    }
}



