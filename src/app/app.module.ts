import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { ItemDialogModule } from "./shared/modules/tools/item-dialog/item.module";
import { Keccak256Module } from "./shared/modules/tools/keccak256/keccak256.module";
import { BroadcastTransactionModule } from "./shared/modules/tools/broadcastTransaction/broadcastTransaction.module";
import { DecodeTransactionDialogModule } from "./shared/modules/tools/decodeTransaction/decodeTransaction.module";
import { InfuraService } from './services/infura.service';


// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        FlexLayoutModule,
        MatCardModule,
        MatSliderModule,
        MatDialogModule,
        ItemDialogModule,
        Keccak256Module,
        BroadcastTransactionModule,
        DecodeTransactionDialogModule,
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, InfuraService],
    entryComponents: [],
    bootstrap: [AppComponent]
})


export class AppModule {}
