import { Observable } from "rxjs";
import { ApiResponse } from "../model/response.model";
import { Note } from "../model/note.model";

export interface INoteService {
    create(note: Partial<Note>): Observable<ApiResponse<Note>>;
    getAll(): Observable<ApiResponse<Note[]>>;
    get(id: number): Observable<ApiResponse<Note>>;
    delete(id:number): Observable<ApiResponse<null>>;

}