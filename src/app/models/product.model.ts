import { Category } from './category.model';

export class Product {
    constructor(
        public id: string,
        public title: string,
        public price: number,
        public description: string,
        public amount: number,
        public category: Category,
    ) { }
}