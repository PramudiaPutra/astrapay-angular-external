import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { INoteService } from "../interface/note.interface";
import { Note } from "../model/note.model";
import { ApiResponse } from "../model/response.model";

@Injectable({providedIn: 'root'})
export class NoteService implements INoteService {
    private readonly api = 'http://localhost:8000/note';

    constructor(private http: HttpClient) {}

    create(note: Partial<Note>): Observable<ApiResponse<Note>> {
        return this.http.post<ApiResponse<Note>>(this.api, note)
    }
    
    getAll(): Observable<ApiResponse<Note[]>> {
        return this.http.get<ApiResponse<Note[]>>(this.api)
    }

    get(id: number): Observable<ApiResponse<Note>> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<ApiResponse<null>> {
        throw new Error("Method not implemented.");
    }
    
}