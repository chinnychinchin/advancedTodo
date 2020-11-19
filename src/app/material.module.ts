import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';

const MATERIAL = [MatButtonModule,MatRadioModule,MatDatepickerModule,MatInputModule,MatDividerModule,MatFormFieldModule]

@NgModule({
    imports: [MATERIAL],
    exports: [MATERIAL]
})

export class MaterialModule { }