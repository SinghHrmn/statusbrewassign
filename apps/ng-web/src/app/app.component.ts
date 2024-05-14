import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import {
  COLOR_GRID_ITEMS,
  ColorGridSelectComponent,
} from '@brew/ng/ui/components';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,

    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,

    ColorGridSelectComponent,
  ],
  selector: 'brew-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  items: string[] = [
    'rgb(255, 0, 0)', // Red
    'rgb(0, 255, 0)', // Lime
    'rgb(0, 0, 255)', // Blue
    'rgb(255, 255, 0)', // Yellow
    'rgb(0, 255, 255)', // Cyan
    'rgb(255, 0, 255)', // Magenta
    'rgb(192, 192, 192)', // Silver
    'rgb(128, 128, 128)', // Gray
    'rgb(128, 0, 0)', // Maroon
    'rgb(128, 128, 0)', // Olive
    'rgb(0, 128, 0)', // Green
    'rgb(128, 0, 128)', // Purple
    'rgb(0, 128, 128)', // Teal
    'rgb(0, 0, 128)', // Navy
    'rgb(255, 165, 0)', // Orange
    'rgb(255, 105, 180)', // Hot Pink
    'rgb(75, 0, 130)', // Indigo
    'rgb(240, 128, 128)', // Light Coral
    'rgb(32, 178, 170)', // Light Sea Green
    'rgb(255, 222, 173)', // Navajo White
  ];

  private readonly _fb = inject(FormBuilder);

  public readonly form = this._fb.group({
    search: this._fb.control(''),
    color: this._fb.control(COLOR_GRID_ITEMS[2], {
      validators: [Validators.required],
    }),
  });
}
