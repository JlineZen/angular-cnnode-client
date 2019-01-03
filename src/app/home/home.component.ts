import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service'
import { Link } from './link.model'
import { StorageService } from '../storage.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links: Link[]

  activeLink: Link

  constructor(private homeService: HomeService, private storageService: StorageService) {}

  ngOnInit(): void {
    this.getTags()
  }

  getTags(): void {
    this.homeService.getTags().subscribe((links: Link[]) => {
      this.links = links
      const activeLink: Link = this.storageService.getItem('activeLink')
      this.activeLink = activeLink ? activeLink : this.links[0]
    })
  }

  go(link: Link): void {
    this.activeLink = link
    this.storageService.setItem('activeLink', link)
  }
}
