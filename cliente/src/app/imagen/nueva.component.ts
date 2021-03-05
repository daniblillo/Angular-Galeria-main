import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImagenService } from '../services/imagen.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * COMPONENTE
 */
@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})

export class NuevaComponent implements OnInit {

  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;

  imagen: File;
  imagenMin: File;

/**
 * CONSTRUCTOR
 * @param imagenService 
 * @param router 
 * @param spinner 
 */
  constructor(
    private imagenService: ImagenService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) { }

/**
 * 
 * @param event
 */
  ngOnInit(): void {
  }

  onFileChange(event) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

/**
 * onUPLOAD
 */
  onUpload(): void {
    this.spinner.show();
    this.imagenService.upload(this.imagen).subscribe(
      data => {
        this.spinner.hide();
        this.router.navigate(['/']);
      },
      err => {
        alert(err.error.mensaje);
        this.spinner.hide();
        this.reset();
      }
    );
  }

/**
 * VALORES a NULL
 */
  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }

}
