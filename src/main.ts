import 'hammerjs'
import * as moment from 'moment'
import 'moment/locale/zh-cn'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

moment.locale('zh')

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
