import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLogined: boolean = true;

  btnLogout: string = 'Log out';

  constructor() { }

  ngOnInit(): void {
  }

}
