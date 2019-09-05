import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [RecipeServiceService]
})
export class CreateComponent implements OnInit {

  public newRecipe: Recipe = {
    name: '',
    type: '',
	category:'',
	preparationTime:'',
	ingredients:'',
	nutrition:''
	
  };
  constructor(private recipeServiceService: RecipeServiceService) { }

  ngOnInit() {
  }
  public createNewRecipe(newRecipe: Recipe):void {
  this.recipeServiceService.createRecipe(newRecipe);
  }

}
