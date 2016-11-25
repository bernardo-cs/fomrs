import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { SearchInputComponent } from "./search-input/search-input.component";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
