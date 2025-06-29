import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { INoteService } from "../interface/note.interface";
import { Note } from "../model/note.model";

@Injectable({providedIn: 'root'})
export class NoteService implements INoteService {
    private readonly api = 'http://localhost:8000/note';

    constructor(private http: HttpClient) {
        console.log("NoteService Constructor Call")
    }

    create(note: Partial<Note>): Observable<Note> {
        return this.http.post<Note>(this.api, note)
    }
    
    getAll(): Observable<Note[]> {

        console.log("getAll call")
        return this.http.get<Note[]>(this.api)
    }

    get(id: number): Observable<Note> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<null> {
        throw new Error("Method not implemented.");
    }
    
}