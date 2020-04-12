import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoriteComponent} from './favorite.component';
import {FavoriteRoutingModule} from './favorite.routing.module';


@NgModule({
    declarations: [FavoriteComponent],
    imports: [
        CommonModule,
        FavoriteRoutingModule
    ]
})
export class FavoriteModule {
}
