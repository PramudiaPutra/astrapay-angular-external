import { Observable } from "rxjs";
import { Note } from "../model/note.model";

export interface INoteService {
    create(note: Partial<Note>): Observable<Note>;
    getAll(): Observable<Note[]>;
    get(id: number): Observable<Note>;
    delete(id:number): Observable<null>;

}