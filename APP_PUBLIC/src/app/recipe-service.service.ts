import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Http, Response } from '@angular/http';

@Injectable()
export class RecipeServiceService {

  private recipesUrl = 'http://localhost:3000/api/recipes';
  
  constructor(private http: Http) {}
    // get("/api/recipes")
    getRecipes(): Promise<void | Recipe[]> {
      return this.http.get(this.recipesUrl)
                 .toPromise()
                 .then(response => response.json() as Recipe[])
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      console.log("error");
    }
	
  getSingleRecipe(recipeid: String): Promise<void | Recipe>{
     return this.http.get(this.recipesUrl + '/' + recipeid)
              .toPromise()
              .then(response => response.json() as Recipe)
              .catch(this.handleError);
   }
   
  createRecipe(newRecipe: Recipe):  Promise<void | Recipe>{
     return this.http.post(this.recipesUrl, newRecipe)
              .toPromise()
              .then(response => response.json() as Recipe)
              .catch(this.handleError);
              }
			  
 updateRecipe(recipeid: String, newRecipe: Recipe): Promise<void | Recipe>{
     const url = this.recipesUrl + '/' + recipeid;
     return this.http.put(url, newRecipe)
              .toPromise()
              .then(response => response.json() as Recipe)
              .catch(this.handleError);
              }
			  
			  deleteRecipe(recipeid: String): Promise<void | Recipe>{
     return this.http.delete(this.recipesUrl + '/' + recipeid)
              .toPromise()
              .then(response => response.json() as Recipe)
              .catch(this.handleError);
   }
}
