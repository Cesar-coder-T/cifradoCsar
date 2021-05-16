import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Dependencias que permiten usar rutas y animaciones.
 */
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * Componentes genericos.
 */
 import { AppComponent } from './app.component';
 import { AlfabetoComponent } from './pages/alfabeto/alfabeto.component';
 import { CifradoComponent } from './pages/cifrado/cifrado.component';
 /**
 * Componentes de Angular Material.
 */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AlfabetoComponent,
    CifradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
