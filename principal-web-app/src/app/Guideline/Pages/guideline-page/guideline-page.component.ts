import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-guideline-page',
  templateUrl: './guideline-page.component.html',
  styleUrls: ['./guideline-page.component.css']
})
export class GuidelinePageComponent implements OnInit{
  ruta: string | null = '';
  titulo: string | null = '';
  descripcion: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ruta = params.get('component');
     }
    );
        if (this.ruta === 'IA') {
          this.titulo = 'Information Architecture';
          this.descripcion = 'La arquitectura de la información se centra en organizar y estructurar la información de manera clara y efectiva para mejorar la usabilidad y la experiencia del usuario en un sistema o aplicación.';
      } else if (this.ruta === 'Browser_Window_Features') {
          this.titulo = 'Browser Window Features';
          this.descripcion = 'Las características de la ventana del navegador se refieren a las funcionalidades específicas que un navegador web proporciona, como pestañas, marcadores, historial, entre otros, que afectan la experiencia del usuario al interactuar con la aplicación.';
      } else if (this.ruta === 'Tipografia') {
        this.titulo = 'Tipography';
        this.descripcion = 'La tipografía en el diseño se refiere al estilo y disposición de las letras y textos. La elección adecuada de fuentes y su presentación impactan significativamente la legibilidad y el atractivo visual del contenido.';
      }else if (this.ruta === 'Color') {
        this.titulo = 'Color';
        this.descripcion = 'El uso adecuado del color en el diseño es esencial para transmitir información, establecer jerarquías y mejorar la legibilidad. La paleta de colores elegida impacta directamente en la percepción y la experiencia del usuario.';
    } else if (this.ruta === 'CheckBox') {
      this.titulo = 'CheckBox';
      this.descripcion = 'Los checkbox son elementos de interfaz de usuario que permiten a los usuarios seleccionar o deseleccionar opciones. Su diseño y ubicación son críticos para facilitar la toma de decisiones del usuario.';
    } else if (this.ruta === 'ComboBox') {
      this.titulo = 'ComboBox';
      this.descripcion = 'Los ComboBox, o listas desplegables, son componentes de interfaz que permiten a los usuarios seleccionar una opción de una lista. Su diseño influye en la accesibilidad y la facilidad de uso.';
    } else if (this.ruta === 'Listas') {
      this.titulo = 'Listas';
      this.descripcion = 'Las listas organizan la información de manera estructurada, facilitando la comprensión y la navegación. Un diseño claro y jerárquico es esencial para presentar la información de manera efectiva.';
    } else if (this.ruta === 'Tables') {
      this.titulo = 'Tablas';
      this.descripcion = 'Las tablas se utilizan para mostrar datos en un formato estructurado. Un diseño eficiente de tablas mejora la legibilidad y facilita la comprensión de la información presentada.';
    } else if (this.ruta === 'Dividers') {
      this.titulo = 'Dividers';
      this.descripcion = 'Los divisores se emplean para separar y organizar visualmente elementos en una interfaz. Un diseño coherente de divisores mejora la claridad y la apariencia estética de la interfaz.';
    } else if (this.ruta === 'Alert_Messages') {
      this.titulo = 'Alert Messages';
      this.descripcion = 'Los mensajes de alerta comunican información importante o notifican sobre eventos críticos. Su diseño y redacción influyen en la efectividad de la comunicación con el usuario.';
    } else if (this.ruta === 'Cards') {
      this.titulo = 'Cards';
      this.descripcion = 'Las tarjetas se utilizan para presentar información de manera visualmente atractiva. Un diseño consistente de tarjetas contribuye a una interfaz coherente y fácil de entender.';
    } else if (this.ruta === 'Pictures') {
      this.titulo = 'Pictures';
      this.descripcion = 'Las imágenes y gráficos en una interfaz agregan valor visual y emocional. Su integración adecuada mejora la experiencia del usuario y la comprensión de la información.';
    } else if (this.ruta === 'Links') {
      this.titulo = 'Links';
      this.descripcion = 'Los enlaces o vínculos son elementos esenciales para la navegación. Un diseño claro y distintivo de enlaces facilita la interacción y la orientación del usuario dentro de la aplicación.';
    } else if (this.ruta === 'Progress_Indication') {
      this.titulo = 'Progress Indicators';
      this.descripcion = 'Los indicadores de progreso informan al usuario sobre el avance de una tarea o proceso. Un diseño efectivo de estos indicadores mejora la percepción del tiempo y la interacción del usuario.';
    } else if (this.ruta === 'Maps') {
      this.titulo = 'Maps';
      this.descripcion = 'La integración de mapas proporciona información geoespacial valiosa. Un diseño interactivo y fácil de usar de mapas mejora la experiencia del usuario en aplicaciones relacionadas con la ubicación.';
    }else if (this.ruta === 'Actions') {
      this.titulo = 'Buttons';
      this.descripcion = 'Los botones son los que desencadenaran varias de las funcionalidades por lo que es necesario que sean faciles de entender';
    }
  }
}
