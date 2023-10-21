export function FormatBookResponse(booksData) {
  let books = [];
  for (let item of booksData.items) {
    if (item.volumeInfo.industryIdentifiers) {
      let book = prepareBookObject(item);
      books.push(book);
    }
  }
  return books;
}

export function prepareBookObject(item) {
  let book = {
    id: item.id,
    subTitle: item.volumeInfo.subtitle,
    title: item.volumeInfo.title,
    isbn: item.volumeInfo.industryIdentifiers[0].identifier,
    image: item.volumeInfo.imageLinks?.thumbnail,
    publisher: item.volumeInfo.publisher,
    rating: Math.floor(Math.random() * 10) + 1,
    year: item.volumeInfo.publishedDate
  };
  return book;
}

export function average(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}
