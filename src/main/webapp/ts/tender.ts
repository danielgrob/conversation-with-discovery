import {Component} from 'angular2/core';

/*
 * This component is responsible for the Tender layout.
 */
@Component({
    inputs: ['tender'],
    selector: 'tender',
    template: `
        <div class="tender-product-box">
            <div class="tender-component top" >
                <div class="tender-title" [innerHtml]='getTitle()'>
                </div>
                <a target="_blank" href="//www.youtube-nocookie.com/embed/-a2ZEZx_B5I?rel=0&amp;controls=0&amp;showinfo=0&quot; frameborder=&quot;0&quot; allowfullscreen"> </a>
            </div>
            <div class="tender-component included" >
                <div class="tender-component-title">Haftpflicht</div>
                <div class="tender-component-preis" [innerHtml]="getHaftpflicht()"> </div>
            </div>
            <div  [class]="'tender-component ' + (getTeilkasko()===0?'excluded':'included')">
                <div class="tender-component-title">Teilkasko</div>
                <div class="tender-component-preis" [innerHtml]="getTeilkasko()"> </div>
            </div>
            <div  [class]="'tender-component ' + (getVollkasko()===0?'excluded':'included')">
                <div class="tender-component-title">Vollkasko</div>
                <div class="tender-component-preis" [innerHtml]="getVollkasko()"> </div>
            </div>
            <div class='tender-component' >
                <div class="tender-component-title">Total</div>
                <div class="tender-component-preis" [innerHtml]="getTotal()"> </div>
            </div>
        </div> 
    `
})

export class TenderComponent {
    private tender : any;

    private getTitle() {
        return this.tender.title;
    }

    private getHaftpflicht() {
        return this.tender.haftpflicht;
    }

    private getTeilkasko() {
        return this.tender.teilkasko;
    }

    private getVollkasko() {
        return this.tender.vollkasko;
    }

    private getTotal() {
        return this.tender.total;
    }

}
