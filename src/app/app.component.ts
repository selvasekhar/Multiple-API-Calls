import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultipleapiComponent } from "./pages/multipleapi/multipleapi.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MultipleapiComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 
}
