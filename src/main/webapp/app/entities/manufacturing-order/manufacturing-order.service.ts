import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils } from 'ng-jhipster';

import { ManufacturingOrder } from './manufacturing-order.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ManufacturingOrderService {

    private resourceUrl = 'api/manufacturing-orders';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(manufacturingOrder: ManufacturingOrder): Observable<ManufacturingOrder> {
        const copy = this.convert(manufacturingOrder);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    update(manufacturingOrder: ManufacturingOrder): Observable<ManufacturingOrder> {
        const copy = this.convert(manufacturingOrder);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    find(id: number): Observable<ManufacturingOrder> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
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

    send(id: number): Observable<ManufacturingOrder> {
        return this.http.get(`${this.resourceUrl}/send/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            this.convertItemFromServer(jsonResponse[i]);
        }
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convertItemFromServer(entity: any) {
        entity.orderDate = this.dateUtils
            .convertDateTimeFromServer(entity.orderDate);
    }

    private convert(manufacturingOrder: ManufacturingOrder): ManufacturingOrder {
        const copy: ManufacturingOrder = Object.assign({}, manufacturingOrder);

        copy.orderDate = this.dateUtils.toDate(manufacturingOrder.orderDate);
        return copy;
    }
}
