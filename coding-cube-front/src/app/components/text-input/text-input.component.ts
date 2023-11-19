import { Component } from '@angular/core';
import {CodingCubeService} from "../../services/coding-cube.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  result$: Observable<string>;
  result: string;
  isEncoded = false;

  constructor(private codingCubeService: CodingCubeService) {}

  encode(textInput: HTMLTextAreaElement): boolean {
    this.result$ = this.codingCubeService.encode(textInput.value);

    this.result$.subscribe(result => {
      this.result = result;
    });

    this.isEncoded = true;
    return false;
  }

  decode(textInput: HTMLTextAreaElement): boolean {
    this.result$ = this.codingCubeService.decode(textInput.value);

    this.result$.subscribe(result => {
      this.result = result;
    });

    this.isEncoded = true;
    return false;
  }
}
