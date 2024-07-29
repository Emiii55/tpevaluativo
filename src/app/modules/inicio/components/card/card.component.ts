import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { Productosdynastar } from 'src/app/models/productosdynastar';
import { Productoshead } from 'src/app/models/productoshead';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public productosesqui: Productos[];
  public productosesqui2: Productosdynastar[];
  public productosesqui3: Productoshead[];

  constructor() {
    this.productosesqui = [

      {
        id: "",
        nombre: "Atomic Bent 100",
        imagen: "https://www.atomic.com/es-es/shop-emea/media/catalog/product/article_images/AA0029846_/AA0029846__76fc3fa62be90a953a831df4e4d33422.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400",
        descripcion: "Esquís freeride diseñado para toda montaña, con un diseño artístico realizado por el legendario esquiador Chris Benchetler. Diseñado con punta doble para una manejabilidad especial a la hora de esquiar.",
        precio: "Precio: $2.000.000"
      },
      {
        id: "",
        nombre: "Atomic Redster S9 Revoshock S",
        imagen: "https://www.atomic.com/es-es/shop-emea/media/catalog/product/article_images/AASS03256_/AASS03256__7ae2d7ca5b48dd4eafa8abb4d36ad203.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400",
        descripcion: "Esquís slalom de última generación con más de 65 años de herencia, diseñados para arrasar en la pista, con palas anchas y una tecnologia Revoshock S que mantiene giros rápidos y marcha estable.",
        precio: "Precio: $900.000"
      },
      {
        id: "",
        nombre: "Atomic Maverick 115 CTI",
        imagen: "https://www.atomic.com/es-es/shop-emea/media/catalog/product/article_images/AA0030354_/AA0030354__ed8ac85033ddbcc2422943a70a60ba77.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400",
        descripcion: "Esquís freeride de última generación, diseñado en un perfecto equilibrio entre el carbono y el titanio para una flexión más dócil. Diseño unisex realizado por atletas del Freeride World Tour.",
        precio: "Precio: $700.000"
      },
      /*
      {
        id: "",
        nombre: "Atomic Backland 95",
        imagen: "https://www.atomic.com/es-es/shop-emea/media/catalog/product/article_images/AA0029846_/AA0029846__76fc3fa62be90a953a831df4e4d33422.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400",
        descripcion: "Esquís de hombre hechos para realizar freetouring, diseñado para ser ligero y obtener un descenso rápido, destacando su patín de 95mm.",
        precio: "Precio: $800.000"
      }
        */

    ]

    this.productosesqui2 = [
      {
        id2: "",
        nombre2: "Dynastar Menace 90 XPRESS",
        imagen2: "https://www.dynastar-lange.com/dw/image/v2/BJJZ_PRD/on/demandware.static/-/Sites-rossignol-catalog/default/dw3db554e3/images/large/DAMQE02_FCJD001_M-MENACE_90_XPRESS_XPRESS_11_GW_B93_BLACK_RGB72DPI_01.jpg?sw=800",
        descripcion2: "Esquís modelo masculino/unisex, diseñado con madera de álamo con fibras de vidrio, volviendolo ligero y manejable, con unas palas anchas y una capacidad todoterreno.",
        precio2: "Precio: $510.000",
      },
      {
        id2: "",
        nombre2: "Dynastar M-Cross 88 Konect",
        imagen2: "https://www.dynastar-lange.com/dw/image/v2/BJJZ_PRD/on/demandware.static/-/Sites-rossignol-catalog/default/dw301d49bb/images/large/DAMX703_M-CROSS_88_KONECT_rgb72dpi_01.jpg?sw=800",
        descripcion2: "Esquís all mountain diseñado para hombres, con una capacidad única para maniobrar sobre la nieve de cualquier tipo, con una pala ancha y cantos de fibra para un mejor agarre.",
        precio2: "Precio: $1.000.000",
      },
      {
        id2: "",
        nombre2: "Dynastar Speed 563 Konect",
        imagen2: "https://www.dynastar-lange.com/dw/image/v2/BJJZ_PRD/on/demandware.static/-/Sites-rossignol-catalog/default/dw0da3e858/images/large/DAMZ304_FCLCN03_SPEED_563_KONECT_NX_12_KONECT_GW_B80_BLACK_HOT_RED_RGB72DPI_01.jpg?sw=800",
        descripcion2: "Esquís de pista para hombres, una nueva generación de Dynastar que trae consigo una gran viabilidad sobre pistas y un gran control gracias a sus palas anchas y curvas.",
        precio2: "Precio: $700.000",
      },
      /*
      {
        id2: "",
        nombre2: "Dynastar Tour 99 F-TEAM Open",
        imagen2: "https://www.dynastar-lange.com/dw/image/v2/BJJZ_PRD/on/demandware.static/-/Sites-rossignol-catalog/default/dwd414f099/images/large/DALT101_FCIW105_M-TOUR_99_F-TEAM_OPEN_HM_ROTATION_10_DEMO_D105_BLACK_CHROME_rgb72dpi_01.jpg?sw=800",
        descripcion2: "Esquís freeride diseñados de forma sencilla para que se vuelvan mas accesibles, ayudando al bolsillo del comprador, con una pala resistente y ancha, aportando una gran estabilidad.",
        precio2: "Precio: $900.000",
      }
        */
    ]

    this.productosesqui3 = [
      {
        id3: "",
        nombre3: "Rosignol Rally Bird 92",
        imagen3: "https://www.rossignol.com/dw/image/v2/BJJZ_PRD/on/demandware.static/-/Sites-rossignol-catalog/default/dwed2d8a30/images/large/RALML03_FCLRS04_RALLYBIRD_92_OPEN_SPX_12_METRIX_GW_B100_BLACK_01.jpg?sw=800",
        descripcion3: "Esquís diseñado para aquellos corredores de pista con experiencia, con su diseño que lo vuelve ágil y velóz, siendo perfecto para la pista.",
        precio3: "Precio: $120.000",
      },
      {
        id3: "",
        nombre3: "Rossignol Sender Free 110",
        imagen3: "https://www.rossignol.com/dw/image/v2/BJJZ_PRD/on/demandware.static/-/Sites-rossignol-catalog/default/dw03f88d63/images/large/RAMMB01_FCMPA02_SENDER_FREE_110_OPEN_PIVOT_15_GW_B115_SENDER_SIGNATURE_RGB72DPI_01.jpg?sw=800",
        descripcion3: "Diseñado para esquiadores all mountain, su diseño permite alcanzar una gran velocidad y principalmente un estabilidad ideal para aquellos intrepidos.",
        precio3: "Precio: $700.000",
      },
      {
        id3: "",
        nombre3: "Rossignol Sender 104 TI Open",
        imagen3: "https://www.rossignol.com/dw/image/v2/BJJZ_PRD/on/demandware.static/-/Sites-rossignol-catalog/default/dw103a67d3/images/large/RALMJ01_FCLWO08_SENDER_104_TI_OPEN_DARKLITE_12_BLACK_01.jpg?sw=800",
        descripcion3: "All mountain diseñado a mano, con unas curvas que permiten una mayor aceleración, acompañado de grandes palas que ayudan a frenar lo justo y necesario.",
        precio3: "Precio: $200.000",
      },
      /*
      {
        id3: "",
        nombre3: "Head Shape V4",
        imagen3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRhiB9y0KeWivO3pQW3gILZc1gj17yaBvgg&s",
        descripcion3: "Esquís perfectos para aquellos que desean realizar una travesía por toda la montaña, pues su pala inclinada permite pasar por cualquier nieve, sumado a su gran velocidad y estabilidad.",
        precio3: "Precio: $500.000",
      } */
    ]

  }
}
