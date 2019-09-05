import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe';
import { switchMap } from 'rxjs/operators';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [RecipeServiceService]
})
export class UpdateComponent implements OnInit {
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
  public upDateRecipe(recipeid , newRecipe:Recipe): void {
  this.recipeServiceService.updateRecipe(recipeid,newRecipe);
  }

}
