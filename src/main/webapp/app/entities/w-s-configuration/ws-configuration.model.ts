import { BaseEntity } from './../../shared';

export class WSConfiguration implements BaseEntity {
    constructor(
        public id?: number,
        public first?: boolean,
        public last?: boolean,
        public workStation?: BaseEntity,
        public prevWorkStation?: BaseEntity,
        public nextWorkStation?: BaseEntity,
        public supplyTypes?: BaseEntity[],
        public employees?: BaseEntity[],
        public line?: BaseEntity,
    ) {
        this.first = false;
        this.last = false;
    }
}
