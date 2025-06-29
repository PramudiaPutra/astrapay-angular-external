import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NoteService } from "../../../core/service/note.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
    selector: 'note-form',
    templateUrl: './note-form.component.html',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbar
    ],
    standalone: true
})
export class NoteFormComponent implements OnInit {
    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private noteService: NoteService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            Title: ['', Validators.required]
        })
    }

    submit(): void {
        if(this.form.valid) {
            this.noteService.create(this.form.value).subscribe(() => {
                this.router.navigate(['/dashboard'])
            })
        }
    }
}