import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators'
import { HttpHeaders, HttpClient } from '@angular/common/http'

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}


/**
 * Service with methods to add, edit or
 * delete elements to backend.
 *
 * @export
 * @class BaseService
 */
@Injectable()
export class BaseService {

    API_URL:string = "https://tamacgotchibackend.us-south.cf.appdomain.cloud"

    /**
     *Creates an instance of BaseService.
     * @param {HttpClient} http
     * @memberof BaseService
     */
    constructor(
        private http: HttpClient
    ){}
    
    /**
     * Method to get elements from backend
     *
     * @param {string} endpoint // Provides the endpoint to access backend.
     * @returns {Observable<any>} Return list of elements
     * if everything is ok or error if not 
     * @memberof BaseService
     */
    getBase(endpoint: string):Observable<any>{
        let apiURL =  `${this.API_URL}${endpoint}`
        return this.http.get(apiURL).pipe(
            catchError(this.handleError('getBase'))
        )
    }

    /**
     * Method to add element to backend
     *
     * @param {object} element to be added
     * @param {string} endpoint // Provides the endpoint to access backend.
     * @returns {Observable<any>} Return element if everything is ok
     * or error if not
     * @memberof BaseService
     */
    addBase(element: Object, endpoint: string):Observable<any>{
        let apiURL =  `${this.API_URL}${endpoint}`
        return this.http.post(apiURL, element, httpOptions).pipe(
            catchError(this.handleError<any>('addBase'))
        )
    }

    /**
     * Method to edit element
     *
     * @param {Object} element to be edited
     * @param {string} endpoint // Provides the endpoint to access backend.
     * @returns {Observable<any>} return element if everythings is ok
     * or error if not
     * @memberof BaseService
     */
    updateBase(element: Object, endpoint: string):Observable<any>{
        let apiURL =  `${this.API_URL}${endpoint}`
        return this.http.put(apiURL, element, httpOptions).pipe(
            catchError(this.handleError<any>('updateBase'))
        )
    }

    /**
     * Method to delete element
     *
     * @param {Object} element to be deleted
     * @returns {Observable<any>} return null if everythings is ok
     * or error if not
     * @memberof BaseService
     */
    deleteBase(element: Object, endpoint:string):Observable<any>{
        let apiURL = `${this.API_URL}${endpoint}`
        return this.http.delete(apiURL, httpOptions).pipe(
            catchError(this.handleError<any>('deleteBase'))
        )
    }

    
    /**
     * Method to handle errors
     *
     * @private
     * @template T
     * @param {string} [operation='operation'] operation that generates the error
     * @returns Observable with error info
     * @memberof BaseService
     */
    private handleError<T>(operation = 'operation'){
        return (error_object: any):Observable<T> =>{
            return of(error_object)
        }
    }
}