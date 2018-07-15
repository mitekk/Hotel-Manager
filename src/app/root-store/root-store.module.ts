import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsStoreModule } from './hotels-store/hotels-store.module';

@NgModule({
  imports: [
    CommonModule,
    HotelsStoreModule
  ],
  declarations: []
})
export class RootStoreModule { }
