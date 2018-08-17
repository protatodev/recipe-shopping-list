import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A Test Maybe', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F06%2Fmain%2Frigatoni-kale-pesto-1708p12.jpg%3Fitok%3DZRmUV5oK&w=800&q=85'),
    new Recipe('French Toast', 'The best french toast recipe ever!', 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/2000/quick-and-easy-french-toast.ashx?vd=20180710T034204Z&hash=EBB379B04B29D72AE40BC488CBE9B43897107364')
  ];


  constructor() { }

  ngOnInit() {
  }

}
