import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule
    ],
    providers: [],
    // entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

    // constructor(private injector: Injector) {

    // }

    // ngDoBootstrap() {
    //     const App = createCustomElement(AppComponent, { injector: this.injector });
    //     customElements.define('app-root', App);
    // }

}
