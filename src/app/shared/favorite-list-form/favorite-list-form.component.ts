import { FavoriteList } from "./../../favorite-zone/store/favorite.models";
import { AppState } from "./../../store/app.models";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  AddNewFavoriteList,
  updateFavoriteList,
} from "../../favorite-zone/store/favorite.actions";
import { getCurrentList } from "../../favorite-zone/store/favorite.selector";
import { generateUniqueId } from "../utils";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "favorite-list-form",
  templateUrl: "./favorite-list-form.component.html",
  styleUrls: ["./favorite-list-form.component.scss"],
})
export class FavoriteListFormComponent implements OnInit {
  form;
  currentList: FavoriteList;

  ngOnInit() {
    //listen for current list
    this.store.select(getCurrentList).subscribe(list => {
      this.currentList = list;
      this.form = this.fb.group({
        name: [this.currentList && this.currentList.name, Validators.required],
        description: [this.currentList && this.currentList.description],
      });
    });
  }
  constructor(private fb: FormBuilder, private store: Store<AppState> , private modalService: NgbModal) {}
  get zoneName() {
    return this.form.get("name");
  }
  save() {
    if (this.currentList.id === "0") {
      // new List
      const id = generateUniqueId();
      this.store.dispatch(
        new AddNewFavoriteList({ ...this.currentList, id, ...this.form.value }),
      );
    } else {
      this.store.dispatch(
        new updateFavoriteList({ ...this.currentList, ...this.form.value }),
      );
      this.modalService.dismissAll();
    }
  }
}
