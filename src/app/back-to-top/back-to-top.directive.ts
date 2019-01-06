import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[back-to-top]'
})
export class BackTopDirective {
  constructor(elr: ElementRef) {
    elr.nativeElement.addEventListener(
      'click',
      function() {
        window.scrollTo(0, 0)
      },
      false
    )
  }
}
