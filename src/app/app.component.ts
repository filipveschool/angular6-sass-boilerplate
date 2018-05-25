import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: 'app';
    url: 'http://www.angular6-sass-boilerplate.io';
    // https://github.com/gdi2290/angular-starter/blob/master/src/app/app.component.ts
}
