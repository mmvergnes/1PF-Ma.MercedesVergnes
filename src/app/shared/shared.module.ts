import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { StyleTitlesDirective } from './directives/style-titles.directive';
import { CompleteNamePipe } from './Pipes/complete-name.pipe';


@NgModule({
  declarations: [
    StyleTitlesDirective,
    CompleteNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSelectModule,
    ReactiveFormsModule,
    StyleTitlesDirective,
    CompleteNamePipe
  ]
})
export class SharedModule { }
