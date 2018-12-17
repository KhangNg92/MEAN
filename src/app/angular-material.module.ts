import { NgModule } from "@angular/core";

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,

} from "@angular/material";

@NgModule({

  // with the Angular 7 we don't have to import them
  // we can just export them and they will automatically
  // import them for us
exports: [
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule
]
})

export class AngularMaterial {}
