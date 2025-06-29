import { Component, NgModule, OnInit } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Note } from "../../../core/model/note.model";
import { NoteService } from "../../../core/service/note.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";


@Component({ 
    selector: 'note-dashboard',
    templateUrl: './dashboard.component.html',
    imports: [
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        
    ],
    standalone: true
    , template: '<h1>DASHBOARD</h1>'
 })

export class DashboardComponent implements OnInit {
    notes: Note[] = []

    constructor(private noteService: NoteService, private router: Router) {}

    delete(id:number): void {
        
    }

    ngOnInit(): void {
        this.noteService.getAll().subscribe(res => this.notes = res.data);
    }
}