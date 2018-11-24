import { EffectsModule } from "@ngrx/effects";
import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule, MetaReducer, ActionReducer } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { localStorageSync } from "ngrx-store-localstorage";
import { rootReducer } from "./store/app.reducer";

export function localStorageSyncReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return localStorageSync({
    keys: [{ "favorite-zones": ["zones"] }],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: "images zone",
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
