import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  pageTitle: string = 'product Details';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.product = 
      {
        "productId": 1,
        "productName": "RoadBike",
        "productCode": "GDN-001",
        "releaseDate": "May 4th 2024",
        "description": "Super light",
        "price": 3000,
        "starRating": 4.5,
        "imageUrl": "https://imgs.search.brave.com/gM6XtY60KoxSaULnx2G6vyG3UbcopLgAijNzbqY2RPE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aXJl/c3ZlbG8uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA2/L0ZhY3Rvci1Pc3Ry/by1WQU0tQmxhY2st/YW5kLVdoaXRlLUN1/c3RvbS1Db21wbGV0/ZS1CaWtlLTEwMjR4/NjgzLmpwZw"
    };
    }
    onBack(): void {
      this.router.navigate(['/products']);
    }

}
