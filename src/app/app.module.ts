import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GaleryComponent } from './galery/galery.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReportComponent } from './report/report.component';

const rutas:Routes = [
  {path:'informacion', component:GaleryComponent},
  {path:'registro', component:FormularioComponent},
  {path:'report', component:ReportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GaleryComponent,
    FormularioComponent,
    ReportComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {}
