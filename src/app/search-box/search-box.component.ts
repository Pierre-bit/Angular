import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  // le @input indique une entree mais n'a rien a voir avec le input de html
  @Input('entree') 
  text: string = "bonjour";

  textSearch = 'SearchText';
  constructor() { }

  ngOnInit(): void {
  }

}
