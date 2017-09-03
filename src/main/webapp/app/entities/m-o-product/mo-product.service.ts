import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { MOProduct } from './mo-product.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class MOProductService {

    private resourceUrl = 'api/m-o-products';

    constructor(private http: Http) { }

    create(mOProduct: MOProduct): Observable<MOProduct> {
        const copy = this.convert(mOProduct);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(mOProduct: MOProduct): Observable<MOProduct> {
        const copy = this.convert(mOProduct);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<MOProduct> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    findByManufacturingOrder(id: number): Observable<MOProduct[]> {
        return this.http.get(`${this.resourceUrl}/manufacturingOrder/${id}`).map((res: Response) => {
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

    private convert(mOProduct: MOProduct): MOProduct {
        const copy: MOProduct = Object.assign({}, mOProduct);
        return copy;
    }
}
