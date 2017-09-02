import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils } from 'ng-jhipster';

import { Tracer } from './tracer.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class TracerService {

    private resourceUrl = 'api/tracers';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(tracer: Tracer): Observable<Tracer> {
        const copy = this.convert(tracer);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    update(tracer: Tracer): Observable<Tracer> {
        const copy = this.convert(tracer);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    find(id: number): Observable<Tracer> {
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

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            this.convertItemFromServer(jsonResponse[i]);
        }
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convertItemFromServer(entity: any) {
        entity.inTime = this.dateUtils
            .convertLocalDateFromServer(entity.inTime);
        entity.startTime = this.dateUtils
            .convertLocalDateFromServer(entity.startTime);
        entity.endTime = this.dateUtils
            .convertLocalDateFromServer(entity.endTime);
    }

    private convert(tracer: Tracer): Tracer {
        const copy: Tracer = Object.assign({}, tracer);
        copy.inTime = this.dateUtils
            .convertLocalDateToServer(tracer.inTime);
        copy.startTime = this.dateUtils
            .convertLocalDateToServer(tracer.startTime);
        copy.endTime = this.dateUtils
            .convertLocalDateToServer(tracer.endTime);
        return copy;
    }
}
