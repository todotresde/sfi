import { BaseEntity } from './../../shared';

export class ManufacturingOrder implements BaseEntity {
    constructor(
        public id?: number,
        public code?: string,
        public date?: any,
        public status?: number,
        public name?: string,
    ) {
    }
}
