import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./projects/projects.module").then((m) => m.ProjectsModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then((m) => m.ContactModule),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
