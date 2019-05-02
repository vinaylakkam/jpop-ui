export class Product {
    constructor(
        public id: number,
        public name: string = '',
        public desc: string = '',
        public rating: number = 0,
        public price: number = 0,
        public imageUrl: string = '') { }
}