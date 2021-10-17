export class PaginatedRaw<T> {
  constructor(paginationOption: PaginationOption<T>) {
      this.datetime = paginationOption.datetime;
      this.currentPage = paginationOption.currentPage;
      this.totalPage =!isFinite(Math.ceil(paginationOption.count/paginationOption.limit)) ? paginationOption.count: Math.ceil(paginationOption.count/paginationOption.limit);;
      this.limit = paginationOption.limit;
      this.count = paginationOption.count;
      this.data = paginationOption.data;
  }
  
  datetime: number;
  currentPage: number;
  totalPage: number;
  limit: number;
  count: number;
  data: T[];
}

export class PaginationOption<T> {
  datetime: number ;
  currentPage: number;
  totalPage?: number;
  limit: number;
  count: number;
  data: T[];
}
