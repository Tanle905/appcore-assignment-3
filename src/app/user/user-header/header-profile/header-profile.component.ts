import { ApplicationRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/user-profile.model';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.sass']
})
export class HeaderProfileComponent implements OnInit {
  @Input() userData:UserProfile | undefined

  constructor(private route: Router, private appRef:ApplicationRef) { }

  ngOnInit(): void {
  }

  onLogout(){
    localStorage.clear()
    this.appRef.tick()
  }

}
