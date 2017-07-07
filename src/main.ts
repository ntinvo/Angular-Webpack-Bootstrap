import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

declare var jQuery:any;
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import './node_modules/jquery/jquery.js';
// import 'bootstrap';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
