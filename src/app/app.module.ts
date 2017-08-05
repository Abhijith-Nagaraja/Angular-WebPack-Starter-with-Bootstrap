import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { MaterialModule } from '@angular/material';

import 'hammerjs';


/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { AngularMaterialModule, SCREENS } from './ngModuleItems';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        ...SCREENS
    ],
    /**
     * Import Angular's modules.
     */
    imports: [
        AngularMaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],

    exports: [
        FormsModule,
        ReactiveFormsModule
    ],

    /**
     * Expose our Services and Providers into Angular's dependency injection.
     */
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS
    ],

    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {

    constructor(
        public appRef: ApplicationRef
    ) { }
}
