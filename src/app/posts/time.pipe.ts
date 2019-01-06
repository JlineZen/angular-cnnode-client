import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({
  name: 'ago'
})
export class TimePipe implements PipeTransform {
  transform(timestamp: string) {
    return moment(timestamp).fromNow()
  }
}
