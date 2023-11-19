import {Component, EventEmitter, Output} from '@angular/core';
import {CodingCubeService} from "../../services/coding-cube.service";

@Component({
  selector: 'app-coding-word',
  templateUrl: './coding-word.component.html',
  styleUrls: ['./coding-word.component.scss']
})
export class CodingWordComponent {
  @Output() isInitialized = new EventEmitter<boolean>();

  codingWord = '';
  codingWordInitialized = false;

  constructor(private codingCubeService: CodingCubeService) { }

  initializeCodingWord(codingWord: HTMLInputElement): boolean {
    this.codingCubeService.initializeCodingWord(codingWord.value);
    this.codingWord = codingWord.value;
    this.codingWordInitialized = true;
    this.isInitialized.emit(true);
    return false;
  }
}
