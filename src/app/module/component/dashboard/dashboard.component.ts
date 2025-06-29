import { Component, OnInit } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Note } from "../../../core/model/note.model";
import { NoteService } from "../../../core/service/note.service";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { lastValueFrom } from "rxjs";


@Component({ 
    selector: 'note-dashboard',
    templateUrl: './dashboard.component.html',
    imports: [
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        RouterModule
    ],
    standalone: true
 })

export class DashboardComponent implements OnInit {
    notes: Note[] = []

    constructor(private noteService: NoteService) {
        console.log("Dashboard constructor call")
    }

    delete(id:number): void {
        this.noteService.delete(id).subscribe(
            () => {
                this.notes = this.notes.filter(note => note.id !== id);
            }
        )
    }

    async ngOnInit(): Promise<void> {
        console.log("Load API Call")
        try {

            const data = await lastValueFrom(this.noteService.getAll())
            console.log("API Response", data);
            this.notes = data;
        } catch (error) {
            console.log('API Call error:', error)
        }
    }

}