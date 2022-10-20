import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-suggestion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss'],
})
export class SuggestionComponent implements OnChanges {
  recipe: boolean = false;
  Restaurant: boolean = false;

  textRecipe: string = '';
  textRestaurant: string = '';

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() data: any = {};
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.textRecipe = this.data?.textRecipe;
    this.textRestaurant = this.data?.textRestaurant;
  }

  clear() {
    this.newItemEvent.emit();

    this.data = {};
    this.textRecipe = '';
    this.textRestaurant = '';
  }
}
