import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'
import { Nav } from '../nav.model'

@Component({
  selector: 'app-navbar',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {
  navs: Nav[]

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTabs()
  }

  private getTabs(): void {
    this.appService.getNavs().subscribe(navs => (this.navs = navs))
  }
}
