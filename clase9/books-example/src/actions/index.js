export function selectBook(book) {
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}

export function updateBooks() {
  return {
    type: "UPDATE_BOOKS",
    payload: [
      { title: "El psicoanalista", pages: 205 },
      { title: "Carrie", pages: 309 },
      { title: "Monstruos invisibles", pages: 342 },
      { title: "Ensayo sobre la ceguera", pages: 123 }
    ]
  };
}