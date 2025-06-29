import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { INoteService } from "../interface/note.interface";
import { Note } from "../model/note.model";

@Injectable({providedIn: 'root'})
export class NoteService implements INoteService {
    private readonly api = 'http://localhost:8000/note';

    constructor(private http: HttpClient) {}

    create(note: Partial<Note>): Observable<Note> {
        return this.http.post<Note>(this.api, note)
    }
    
    getAll(): Observable<Note[]> {
        return this.http.get<Note[]>(this.api)
    }

    get(id: number): Observable<Note> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Observable<void> {
        const url = `${this.api}/${id}`;

        return this.http.delete<void>(url);
    }
    
}