import { Component } from '@angular/core';

declare var jQuery: any;
@Component({
    selector: 'home',  // <home></home>
    templateUrl: './home.component.html'
})
export class HomeComponent {
    loadModal() {
        jQuery("#confirm").modal("show");
    }
}
