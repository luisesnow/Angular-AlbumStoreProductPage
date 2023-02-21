import { Component, OnInit } from '@angular/core';
import { Album } from 'app/album';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album
  constructor(private _produceService: ProductService  ) { }

  ngOnInit() {
    this._produceService.getAlbum(1).subscribe(response => {
      this.albumInfo = response
      console.log(this.albumInfo.album.tracks)
   })
  }

}
