import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagenService } from '../services/imagen.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Imagen } from '../models/imagen';

/**
 * COMPONENTE
 */
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  @Input() index;

  imagenes: Imagen[] = [];

/**
 * CONF INTERFAZ
 */
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

/**
 * CONSTRUCTOR
 * @param activeModal 
 * @param imagenService 
 */
  constructor(
    private activeModal: NgbActiveModal,
    private imagenService: ImagenService
  ) { }

/**
 * AMPLIAR
 */
  ngOnInit() {
    this.config.initialSlide = this.index;
    this.imagenService.list().subscribe(
      data => {
        this.imagenes = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
