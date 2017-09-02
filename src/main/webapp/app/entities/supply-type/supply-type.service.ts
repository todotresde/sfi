import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { SupplyType } from './supply-type.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class SupplyTypeService {

    private resourceUrl = 'api/supply-types';

    constructor(private http: Http) { }

    create(supplyType: SupplyType): Observable<SupplyType> {
        const copy = this.convert(supplyType);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(supplyType: SupplyType): Observable<SupplyType> {
        const copy = this.convert(supplyType);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<SupplyType> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(supplyType: SupplyType): SupplyType {
        const copy: SupplyType = Object.assign({}, supplyType);
        return copy;
    }
}
