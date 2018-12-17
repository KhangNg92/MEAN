import { NgModule } from "@angular/core";
import { PostCreateComponent } from "./post-create/post-create.component";
import { PostListComponent } from "./post-list/post-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterial } from "../angular-material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
declarations:[
  PostCreateComponent,
  PostListComponent,
],
imports: [
  CommonModule,
  ReactiveFormsModule,
  AngularMaterial,
  RouterModule
]
})

export class PostsModule {}
