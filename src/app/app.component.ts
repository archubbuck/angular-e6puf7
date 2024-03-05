import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <kendo-numerictextbox
            [style.width.px]="170"
            format="#.##\\%"
            [value]="value">
        </kendo-numerictextbox>
    `
})
export class AppComponent {
    public value = 3.68;
}
