import { Component, OnDestroy, OnInit ,ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingListForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shlService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shlService.startedEditing.subscribe(
      (index: number) => {
        this.editMode=true;
        this.editItemIndex=index;
        this.editItem =  this.shlService.getIngredient(index);

        this.shoppingListForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      this.shlService.updateIngredient(this.editItemIndex,new Ingredient(value.name, value.amount));
    }else{
      this.shlService.addIngredient(new Ingredient(value.name, value.amount));
    }
    this.onClear();

  }

  onDelete(){
    this.shlService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  onClear(){
    this.editMode=false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
