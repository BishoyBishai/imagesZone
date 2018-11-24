import { FavoriteZone } from "./../../favorite-zone/store/favorite.models";
import { AppState } from "./../../store/app.models";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  AddNewFavoriteZone,
  UpdateFavoriteZone,
} from "../../favorite-zone/store/favorite.actions";
import { getCurrentZone } from "../../favorite-zone/store/favorite.selector";
import { generateUniqueId } from "../utils";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "favorite-zone-form",
  templateUrl: "./favorite-zone-form.component.html",
  styleUrls: ["./favorite-zone-form.component.scss"],
})
export class FavoriteZoneFormComponent implements OnInit {
  form;
  currentZone: FavoriteZone;

  ngOnInit() {
    //listen for current zone
    this.store.select(getCurrentZone).subscribe(zone => {
      this.currentZone = zone;
      this.form = this.fb.group({
        name: [this.currentZone && this.currentZone.name, Validators.required],
        description: [this.currentZone && this.currentZone.description],
      });
    });
  }
  constructor(private fb: FormBuilder, private store: Store<AppState> , private modalService: NgbModal) {}
  get zoneName() {
    return this.form.get("name");
  }
  save() {
    if (this.currentZone.id === "0") {
      // new Zone
      const id = generateUniqueId();
      this.store.dispatch(
        new AddNewFavoriteZone({ ...this.currentZone, id, ...this.form.value }),
      );
    } else {
      this.store.dispatch(
        new UpdateFavoriteZone({ ...this.currentZone, ...this.form.value }),
      );
      this.modalService.dismissAll();
    }
  }
}
