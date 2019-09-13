import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StockService} from '../service/stockService';
import {StockInterface} from '../interfaces/stock.interface';
import {BreadcrumbService} from '../../breadcrumb.service';
import {SelectItem} from 'primeng/api';


@Component({
    templateUrl: './stock.component.html',
    styles: [`
        .ui-dataview-layout-options .ui-button {
            margin-left: .5em;
        }
        .ui-dataview .filter-container {
            text-align: center;
        }


        @media (max-width: 40em) {
            .ui-dataview .car-details, .ui-dataview .search-icon{
                text-align: center;
                margin-top: 0;
            }

            .ui-dataview .filter-container {
                text-align: left;
            }
            .ui-dataview-layout-options.ui-buttonset > .ui-button {
                margin-left: 0;
                display: inline-block;
            }
            .ui-dataview-layout-options.ui-buttonset > .ui-button:first-child {
                border-radius: 50%;
            }
            .ui-dataview-layout-options.ui-buttonset > .ui-button:last-child {
                border-radius: 50%;
            }
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class StockComponent implements OnInit {

    stock: StockInterface;
    allstock: StockInterface[];
    cols: any[];

    products: SelectItem[];
    sizes: SelectItem[];
    publishedChecked = true;
    frozenCols: any[];
    scrollableCols: any[];
    private isLoadingResults: boolean;


    constructor(private stockService: StockService,
                private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Stock'},
            {label: 'Sofa Pronto Stock', routerLink: ['/stock']}
        ]);


    }

    ngOnInit() {
        // this.stockService.getAllPronto();
        // this.stockService.getStock();
        this.stockService.getStock()
            .subscribe(res => {
                this.allstock = res;
                console.log(this.allstock);
                this.isLoadingResults = false;
            }, err => {
                console.log(err);
                this.isLoadingResults = false;
            });

        this.cols = [
            { field: 'OrigId', header: 'Sku', editable: '0', type: 'number', show: 'true' },
            { field: 'Model', header: 'Product Name', editable: '0', type: 'text', show: 'true' },
            { field: 'Size', header: 'Size', editable: '0', type: 'text', show: 'true' },
            { field: 'Fabric', header: 'Fabric', editable: '1', type: 'text', show: 'true' },
            { field: 'Colour', header: 'Colour', editable: '1', type: 'text', show: 'true' },
            { field: 'InStock', header: 'In Stock', editable: '1', type: 'number', show: 'true' },
            { field: 'TotalSold', header: 'Total Sold', editable: '1', type: 'number', show: 'true' },
            { field: 'Stock_A', header: 'Stock-A', editable: '1', type: 'number', show: 'true'},
            { field: 'Date_A', header: 'Date', editable: '1', type: 'date', show: 'true'},
            { field: 'Stock_B', header: 'Stock-B', editable: '1', type: 'number', show: 'true'},
            { field: 'Date_B', header: 'Date', editable: '1', type: 'date', show: 'true'},
            { field: 'Stock_C', header: 'Stock-C', editable: '1', type: 'number', show: 'true'},
            { field: 'Date_C', header: 'Date', editable: '1', type: 'date', show: 'true'},
            { field: 'Stock_D', header: 'Stock-D', editable: '1', type: 'number', show: 'true'},
            { field: 'Date_D', header: 'Date', editable: '1', type: 'date', show: 'true'},
            {field: 'Quarantine', header: 'Quarantine', editable: '1', type: 'number', show: 'true'},
            {field: 'Loan', header: 'Loan', editable: '1', type: 'number', show: 'true'},
            {field: 'LandingCost', header: 'LandingCost', editable: '1', type: 'number', show: 'true'},
            {field: 'TotalToDate', header: 'TotalToDate', editable: '0', type: 'number', show: 'true'},
            {field: 'ThirtyDays', header: '30Days', editable: '0', type: 'number', show: 'true'},
            {field: 'SixtyDays', header: '60Days', editable: '0', type: 'number', show: 'true'},
            {field: 'NinetyDays' , header: '90Days', editable: '0', type: 'number', show: 'true'},
            {field: 'Pro_Published', header: 'Pro_Pub', editable: '', type: 'number', show: 'false'},
            {field: 'Siz_Published', header: 'Siz_Pub', editable: '', type: 'number', show: 'false'},
            {field: 'Cov_Published', header: 'Cov_Pub', editable: '', type: 'number', show: 'false'},
            {field: 'Fab_Published', header: 'Fab_Pub', editable: '', type: 'number', show: 'false'},
            {field: 'Col_Published', header: 'Col_Pub', editable: '', type: 'number', show: 'false'}
        ];

        // Add new field - Quarantine, Loan, Landing Cost, Total To Date, 30 days, 60 days, 90 days
        // export excel


        this.scrollableCols = [
            { field: 'InStock', header: 'In Stock', editable: '1', type: 'number', show: 'true' },
            { field: 'TotalSold', header: 'Total Sold', editable: '1', type: 'text', show: 'true' },
            {field: 'Stock_A', header: 'Stock-A', editable: '1', type: 'number', show: 'true'},
            {field: 'Date_A', header: 'Date', editable: '1', type: 'date', show: 'true'},
            {field: 'Stock_B', header: 'Stock-B', editable: '1', type: 'number', show: 'true'},
            {field: 'Date_C', header: 'Date', editable: '1', type: 'date', show: 'true'},
            {field: 'Stock_C', header: 'Stock-C', editable: '1', type: 'number', show: 'true'},
            {field: 'Date_D', header: 'Date', editable: '1', type: 'date', show: 'true'},
            {field: 'Stock_D', header: 'Stock-D', editable: '1', type: 'number', show: 'true'},
            {field: 'Date_B', header: 'Date', editable: '1', type: 'date', show: 'true'},
            {field: 'Quarantine', header: 'Quarantine', editable: '1', type: 'number', show: 'true'},
            {field: 'Loan', header: 'Loan', editable: '1', type: 'number', show: 'true'},
            {field: 'LandingCost', header: 'Landing', editable: '1', type: 'number', show: 'true'},
            {field: 'TotalToDate', header: 'ToDate', editable: '0', type: 'number', show: 'true'},
            {field: 'ThirtyDays', header: '30', editable: '0', type: 'number', show: 'true'},
            {field: 'SixtyDays', header: '60', editable: '0', type: 'number', show: 'true'},
            {field: 'NinetyDays', header: '90', editable: '0', type: 'number', show: 'true'},
            {field: 'Pro_Published', header: 'Pro_Pub', editable: '', type: 'number', show: 'false'},
            {field: 'Siz_Published', header: 'Siz_Pub', editable: '', type: 'number', show: 'false'},
            {field: 'Cov_Published', header: 'Cov_Pub', editable: '', type: 'number', show: 'false'},
            {field: 'Fab_Published', header: 'Fab_Pub', editable: '', type: 'number', show: 'false'},
            {field: 'Col_Published', header: 'Col_Pub', editable: '', type: 'number', show: 'false'}
        ];


        this.frozenCols = [
            { field: 'OrigId', header: 'Sku', editable: '0', type: 'number', show: 'true' },
            { field: 'Model', header: 'Product', editable: '0', type: 'text', show: 'true' },
            { field: 'Size', header: 'Size', editable: '0', type: 'text', show: 'true' },
            { field: 'Fabric', header: 'Fabric', editable: '1', type: 'text', show: 'true' },
            { field: 'Colour', header: 'Colour', editable: '1', type: 'text', show: 'true' }
        ];

        this.products = [
            {label: 'Bermondsey', value: 'Bermondsey'},
            {label: 'Canonbury', value: 'Canonbury'},
            {label: 'Whitechapel', value: 'Whitechapel'},
            {label: 'Bethnal Green Leather' , value: 'Bethnal Green Leather'},
            {label: 'Broadgate Fabric' , value: 'Broadgate Fabric'},
            {label: 'Haggerston Fabric' , value: 'Haggerston Fabric'},
            {label: 'Haggerston Leather' , value: 'Haggerston Leather'},
            {label: 'Kennington Fabric' , value: 'Kennington Fabric'},
            {label: 'Kennington Leather' , value: 'Limehouse'},
            {label: 'Limehouse' , value: 'Limehouse'},
            {label: 'Temple' , value: 'Temple'}

        ];

        this.sizes = [
            { label: 'Banquette', value:  'Banquette'},
            { label: 'Chair', value:  'Chair'},
            { label: 'Corner Group Left', value:  'Corner Group Left'},
            { label: 'Corner Group Right', value:  'Corner Group Right'},
            { label: 'Corner Sofa Left', value:  'Corner Sofa Left'},
            { label: 'Extra Large Sofa', value:  'Extra Large Sofa'},
            { label: 'Large Lounger', value:  'Large Lounger'},
            { label: 'Large Sofa', value:  'Large Sofa'},
            { label: 'LHF', value:  'LHF'},
            { label: 'RHF', value: 'RHF'},
            { label: 'Small Sofa', value: 'Small Sofa'},
            { label: 'Snuggler Sofa', value:  'Snuggler Sofa'}

        ];



    }

    //   getPublished(published: boolean) {
    //       this.stockService.getAllPronto(published)
    //   }
}
