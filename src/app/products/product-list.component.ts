import {Component, OnInit} from "@angular/core"
import { IProduct } from "./product";
@Component({
    selector: 'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 90;
    imageMargin: number = 2;
    showImage: boolean = false;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];

    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "RoadBike",
            "productCode": "GDN-001",
            "releaseDate": "May 4th 2024",
            "description": "Super light",
            "price": 3000,
            "starRating": 4.5,
            "imageUrl": "https://imgs.search.brave.com/gM6XtY60KoxSaULnx2G6vyG3UbcopLgAijNzbqY2RPE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aXJl/c3ZlbG8uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA2/L0ZhY3Rvci1Pc3Ry/by1WQU0tQmxhY2st/YW5kLVdoaXRlLUN1/c3RvbS1Db21wbGV0/ZS1CaWtlLTEwMjR4/NjgzLmpwZw"
        },
        {
            "productId": 2,
            "productName": "GravelBike",
            "productCode": "GCN-001",
            "releaseDate": "May 4th 2024",
            "description": "Highly durable",
            "price": 3100,
            "starRating": 4.8,
            "imageUrl": "https://imgs.search.brave.com/lXIpvv4jVv6UtzI4Ipa9TbVpm1JL6N_POy6tgoqpSxo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QwL2Uw/LzQyL2QwZTA0Mjdk/MjNmYTkyMDU2YmJh/Nzk0MDBkMjRjYWUz/LmpwZw"
        }
    ];

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listFilter = 'bike';
    }
}