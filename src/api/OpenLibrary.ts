import axios from "axios";

const search = axios.create({
  baseURL: "http://openlibrary.org/"
});

const getCover = axios.create({
  baseURL: "http://covers.openlibrary.org/b/"
});

const getBook = axios.create({
  baseURL: "https://openlibrary.org/api/books"
});

const BookApi = {
  search,
  getCover,
  getBook
};

export default BookApi;
