import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { ProduitsComponent } from './componets/produits/produits.component';
import { HomeComponent } from './componets/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AjouterProuduitComponent } from './componets/ajouter-prouduit/ajouter-prouduit.component';
import { NavBarProduitComponent } from './componets/produits/nav-bar-produit/nav-bar-produit.component';
import { ListProduitComponent } from './componets/produits/list-produit/list-produit.component';
import { StatesComponent } from './componets/states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProduitsComponent,
    HomeComponent,
    AjouterProuduitComponent,
    NavBarProduitComponent,
    ListProduitComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
