// app component
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// Module
import { AppRouterModule } from 'app/app.routes';
import { CommonModule } from '@angular/common';
import { AuthModule } from 'app/features/auth/auth.module';
//directive
import {SpinnerDirective} from './shared/spinner/spinner.directive';

// translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Interceptors
import { TokenInterceptor } from '../app/interceptors/token.interceptor';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';


// Services
import { APP_INITIALIZER } from '@angular/core';
import { SpinnerService } from './shared/spinner/spinner.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { ComponentsModule } from './shared/components.module';

// create loader for translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerDirective
  ],
  imports: [
    AuthModule,
    HttpClientModule,
    ComponentsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [],
  providers: [   
    HomeComponent,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    SpinnerService],
  bootstrap: [AppComponent],
})

export class AppModule {
}
