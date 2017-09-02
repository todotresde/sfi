import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { STAttribute } from './st-attribute.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class STAttributeService {

    private resourceUrl = 'api/s-t-attributes';

    constructor(private http: Http) { }

    create(sTAttribute: STAttribute): Observable<STAttribute> {
        const copy = this.convert(sTAttribute);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(sTAttribute: STAttribute): Observable<STAttribute> {
        const copy = this.convert(sTAttribute);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<STAttribute> {
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

    private convert(sTAttribute: STAttribute): STAttribute {
        const copy: STAttribute = Object.assign({}, sTAttribute);
        return copy;
    }
}
