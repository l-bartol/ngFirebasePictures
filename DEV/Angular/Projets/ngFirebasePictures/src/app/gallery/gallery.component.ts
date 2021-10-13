import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  nbParPage:number = 12;

  ident: string="";
  goodIndent: boolean = true;
  motCle: string = "";
  pagePhotos: any;
  photo:any;
  numPage: number = 1;
  nbPages: number = 0;
  selecteursPage: string[] = [];

  constructor(private galleryService:GalleryService) { }

  ngOnInit(): void {
  }

  onSearch(dataForm: any) {

    this.galleryService.search(this.ident, dataForm.motCle, this.nbParPage, this.numPage).subscribe(
    //data => {console.log(data);
      data => {
        this.ident=dataForm.ident;
        this.pagePhotos=data;
        //console.log("Nombre de photos de " + dataForm.motCle + " trouvée(s) : " + data.totalHits);
        this.nbPages=Math.ceil(data.totalHits/this.nbParPage);
        //console.log("Nombre de pages total : " + this.nbPages);
        this.selecteursPage=new Array(this.nbPages);
        this.goodIndent=true;
      },
      error => {
        console.log(error);
        this.goodIndent=false;
      }
    );
  }

  gotoPage(index:number) {
    this.numPage = index;
    // Passage du parametre grace au data binding du formulaire
    this.onSearch({motCle:this.motCle});
  }
}

