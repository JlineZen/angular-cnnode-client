import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'tab'
})
export class TabPipe implements PipeTransform {
  tabMap = {
    share: '分享',
    good: '精华',
    job: '招聘',
    ask: '问答',
    dev: '客户端测试'
  }
  transform(tab: string) {
    return this.tabMap[tab]
  }
}
