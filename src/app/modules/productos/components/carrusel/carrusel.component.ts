import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements AfterViewInit {

  // Usar ViewChild para acceder al elemento de video
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  // Ejecutar cuando el componente ya está montado
  ngAfterViewInit() {
    const video = this.backgroundVideo.nativeElement;

    // Verificar si el video existe en el DOM
    if (video) {
      // Añadir un evento que se ejecuta cuando el usuario hace scroll
      window.addEventListener('scroll', () => {
        const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;
        const fadeStart: number = 100; // Cuándo empezar el fadeout
        const fadeEnd: number = 800;   // Cuándo terminar el fadeout

        // Calcular la opacidad basada en el desplazamiento del scroll
        let opacity: number = 1;

        if (scrollTop > fadeStart) {
          opacity = 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        }

        // Asegurarse de que la opacidad sea al menos 0
        video.style.opacity = Math.max(opacity, 0).toString();
      });
    } else {
      // Si el video no existe, lanzar un error en la consola
      console.error("No se encontró el elemento de video");
    }
  }
}


