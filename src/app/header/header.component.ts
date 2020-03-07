import { Component, Input } from '@angular/core';
import { GlobalPageChannel } from '../services/GlobalPageChannel';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() titleHeader = '';
  isMenuOpen = false;

  constructor(
    private globalPageChannel: GlobalPageChannel
  ) {
    this.globalPageChannel.search
    .subscribe((dadoAtualDaBusca) => {
      console.log('globalpagechannel Houve update no campo', dadoAtualDaBusca);
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleSearch($event) {
    console.log($event.target.value);
    this.globalPageChannel.updateSearch($event.target.value);
  }
}
