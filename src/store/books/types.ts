export enum BookTypes {
  FETCH_BOOKS = "@book/FETCH_BOOKS",
  FETCH_BOOK_BY_ID = "@book/FETCH_BOOK_BY_ID",
  SAVE_BOOK = "@book/SAVE_BOOK",
  READING = "@book/READING",
  READ = "@book/READ",
  NOT_READ = "@book/NOT_READ",
  NOT_OWNED = "@book/NOT_OWNED"
}

export enum BookRoutes {
  MY_BOOKS = "@book/MY_BOOKS",
  WISH_LIST = "@book/WISH_LIST"
}

export interface Book {
  id: number;
  name: string;
  author: string;
  description?: string;
  readingStatus: BookTypes;
  genre: string;
  coverUrl?: string;
}

export interface MyBooksState {
  readonly list: Book[];
}

export interface WishListState {
  readonly list: Book[];
}

export interface BooksState {
  readonly myBooks: MyBooksState;
  readonly wishList: WishListState;
  readonly bookId?: number;
}

export interface BookProps {
  books?: Book[];
  book?: Book;
  bookId?: number;
  route?: BookRoutes;
}

export interface FetchBooksAction {
  type: typeof BookTypes.FETCH_BOOKS;
  payload: Book[];
}

export interface SaveBookAction {
  type: typeof BookTypes.SAVE_BOOK;
  payload: Book;
}

export interface FetchBookByIdAction {
  type: BookTypes.FETCH_BOOK_BY_ID;
  field: string;
  payload: number;
}

export type BookActions =
  | FetchBooksAction
  | SaveBookAction
  | FetchBookByIdAction;

// export const initialBooksState: BooksState = {
//   list: []
// };

export const initialMyBooksState: MyBooksState = {
  list: [
    {
      id: 1,
      name: "Duna",
      author: "Frank Herbert",
      readingStatus: BookTypes.READING,
      genre: "Sci-Fi",
      coverUrl:
        "https://editoraaleph.vteximg.com.br/arquivos/ids/157318-800-1145/01_SKU_Duna.png?v=636293396899070000"
    },
    {
      id: 2,
      name: "O Nome do Vento",
      author: "Patrick Rothfuss",
      readingStatus: BookTypes.READING,
      genre: "Fantasy",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51R71sVQ6PL.jpg"
    },
    {
      id: 3,
      name: "Agosto",
      author: "Rubem Fonseca",
      readingStatus: BookTypes.READ,
      genre: "Historical Fiction",
      coverUrl:
        "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_b62c810484ca12000cbff983b74f84fe79d010c3.jpg"
    },
    {
      id: 4,
      name: "O Guia do Mochileiro das Galaxias",
      author: "Douglas Adams",
      readingStatus: BookTypes.NOT_READ,
      genre: "Sci-Fi",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/512ERYcB18L.jpg"
    }
  ]
};

export const initialWishListState: WishListState = {
  list: [
    {
      id: 5,
      name: "A Dança da Morte",
      author: "Stephen King",
      readingStatus: BookTypes.NOT_OWNED,
      genre: "Thriller",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51dXS8weHRL.jpg"
    },
    {
      id: 6,
      name: "Crime e Castigo",
      author: "Fiódor Dostoiévski",
      readingStatus: BookTypes.NOT_OWNED,
      genre: "Classic",
      coverUrl:
        "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=6322455&qld=90&l=430&a=-1=1001120327"
    }
  ]
};

export const initialBooksState: BooksState = {
  myBooks: initialMyBooksState,
  wishList: initialWishListState
};
