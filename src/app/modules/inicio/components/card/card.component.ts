import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public productosesqui: Productos[];

  constructor() {
    this.productosesqui = [

      {
        id: "",
        nombre: "Atomic Bent 100",
        imagen: "https://www.atomic.com/es-es/shop-emea/media/catalog/product/article_images/AA0029922_/AA0029922__0e4f2b6ba33fbc54f5c6ee87f84d5819.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400",
        descripcion: "Esquís freeride diseñado para toda montaña, con un diseño artístico realizado por el legendario esquiador Chris Benchetler. Diseñado con punta doble para una manejabilidad especial a la hora de esquiar.",
        precio: "$2.000,000"
      },
      {
        id: "",
        nombre: "Atomic Redster S9 Revoshock S",
        imagen: "https://www.atomic.com/es-es/shop-emea/media/catalog/product/article_images/AASS03256_/AASS03256__7ae2d7ca5b48dd4eafa8abb4d36ad203.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400",
        descripcion: "Esquís slalom de última generación con más de 65 años de herencia, diseñados para arrasar en la pista, con palas anchas y una tecnologia Revoshock S que mantiene giros rápidos y marcha estable.",
        precio: "$900.000"
      },
      {
        id: "",
        nombre: "Atomic Maverick 115 CTI",
        imagen: "https://www.atomic.com/es-es/shop-emea/media/catalog/product/article_images/AA0030354_/AA0030354__ed8ac85033ddbcc2422943a70a60ba77.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400",
        descripcion: "Esquís freeride de última generación, diseñado en un perfecto equilibrio entre el carbono y el titanio para una flexión más dócil. Diseño unisex realizado por atletas del Freeride World Tour.",
        precio: "$700.000"
      }

    ]
  }
}
