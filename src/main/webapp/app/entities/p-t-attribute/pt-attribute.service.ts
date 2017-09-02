import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { PTAttribute } from './pt-attribute.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class PTAttributeService {

    private resourceUrl = 'api/p-t-attributes';

    constructor(private http: Http) { }

    create(pTAttribute: PTAttribute): Observable<PTAttribute> {
        const copy = this.convert(pTAttribute);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(pTAttribute: PTAttribute): Observable<PTAttribute> {
        const copy = this.convert(pTAttribute);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<PTAttribute> {
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

    private convert(pTAttribute: PTAttribute): PTAttribute {
        const copy: PTAttribute = Object.assign({}, pTAttribute);
        return copy;
    }
}
