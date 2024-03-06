import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
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
  imgref: string | null = '';
  @ViewChild('cardsSection') cardsSection!: ElementRef;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ruta = params.get('component');      
      this.updateData(); // Call updateData when ruta changes
    });
     
  }

  updateData(){    
        if (this.ruta === 'IA') {
          this.titulo = 'Information Architecture';
          this.descripcion = 'La arquitectura de la información se centra en organizar y estructurar la información de manera clara y efectiva para mejorar la usabilidad y la experiencia del usuario en un sistema o aplicación.';
          this.imgref = 'https://as2.ftcdn.net/v2/jpg/02/29/28/83/1000_F_229288389_AsDksrYQYmxgaFNSpi3AS4AQjt9sVptV.jpg';
        } else if (this.ruta === 'Browser_Window_Features') {
          this.titulo = 'Browser Window Features';
          this.descripcion = 'Las características de la ventana del navegador se refieren a las funcionalidades específicas que un navegador web proporciona, como pestañas, marcadores, historial, entre otros, que afectan la experiencia del usuario al interactuar con la aplicación.';
          this.imgref = 'https://t4.ftcdn.net/jpg/00/92/19/07/360_F_92190762_yeGsxRgXEBT3y4yU1kgBjz1yIn3mn3Cc.jpg';
        } else if (this.ruta === 'Tipografia') {
        this.titulo = 'Tipografía';
        this.descripcion = 'La tipografía en el diseño se refiere al estilo y disposición de las letras y textos. La elección adecuada de fuentes y su presentación impactan significativamente la legibilidad y el atractivo visual del contenido.';
          this.imgref = 'https://lh3.googleusercontent.com/omZF6EyNfIi-fI-FdGCDg-DfB-b3MZIk55HRGIqhMtujH1yLkiIptmtdmJx_6R_KMPI1amsrE_TSGY4OdSFV7D_sJ9JizLnUWSVyr4-1lU_y=s0';
      }else if (this.ruta === 'Color') {
        this.titulo = 'Color';
        this.descripcion = 'El uso adecuado del color en el diseño es esencial para transmitir información, establecer jerarquías y mejorar la legibilidad. La paleta de colores elegida impacta directamente en la percepción y la experiencia del usuario.';
        this.imgref= 'https://cdn-icons-png.flaticon.com/512/3124/3124925.png';
      } else if (this.ruta === 'CheckBox') {
      this.titulo = 'CheckBox';
      this.descripcion = 'Los checkbox son elementos de interfaz de usuario que permiten a los usuarios seleccionar o deseleccionar opciones. Su diseño y ubicación son críticos para facilitar la toma de decisiones del usuario.';
      this.imgref = 'https://www.drupal.org/files/issues/2022-07-27/checkbox_states.png';
    } else if (this.ruta === 'ComboBox') {
      this.titulo = 'ComboBox';
      this.descripcion = 'Los ComboBox, o listas desplegables, son componentes de interfaz que permiten a los usuarios seleccionar una opción de una lista. Su diseño influye en la accesibilidad y la facilidad de uso.';
      this.imgref = 'https://get-evinced.com/blog/wp-content/uploads/2020/11/combo-box-code-anatomy.png';
    } else if (this.ruta === 'Listas') {
      this.titulo = 'Listas';
      this.descripcion = 'Las listas organizan la información de manera estructurada, facilitando la comprensión y la navegación. Un diseño claro y jerárquico es esencial para presentar la información de manera efectiva.';
      this.imgref = 'https://codewithfaraz.com/img/Creating%20Pull%20to%20Refresh%20with%20HTML,%20CSS,%20and%20JavaScript.jpg'
    } else if (this.ruta === 'Tables') {
      this.titulo = 'Tablas';
      this.descripcion = 'Las tablas se utilizan para mostrar datos en un formato estructurado. Un diseño eficiente de tablas mejora la legibilidad y facilita la comprensión de la información presentada.';
      this.imgref = 'https://lirp.cdn-website.com/3fc23917/dms3rep/multi/opt/spreadsheet-40f4ddd7-640w.png'
    } else if (this.ruta === 'Dividers') {
      this.titulo = 'Dividers';
      this.descripcion = 'Los divisores se emplean para separar y organizar visualmente elementos en una interfaz. Un diseño coherente de divisores mejora la claridad y la apariencia estética de la interfaz.';
      this.imgref = 'https://fontawesome.com/social/grid-dividers?f=&s='
    } else if (this.ruta === 'Alert_Messages') {
      this.titulo = 'Alert Messages';
      this.descripcion = 'Los mensajes de alerta comunican información importante o notifican sobre eventos críticos. Su diseño y redacción influyen en la efectividad de la comunicación con el usuario.';
      this.imgref = 'https://media.istockphoto.com/id/1222970945/vector/new-chat-text-message-notice-icon-vector-or-received-incoming-notification-chatting-speech.jpg?s=612x612&w=0&k=20&c=AgarF78IHk_ROZy7sbD1DlwI2lkwq2bxQGOE7gX-i5U='
    } else if (this.ruta === 'Cards') {
      this.titulo = 'Cards';
      this.descripcion = 'Las tarjetas se utilizan para presentar información de manera visualmente atractiva. Un diseño consistente de tarjetas contribuye a una interfaz coherente y fácil de entender.';
      this.imgref = 'https://lh3.googleusercontent.com/lIozFbnBTkE7RrpMvOBEnCrowSAggSm5o8hvC7TRRKszs-rbyAdEo5lsST1x53jOuU2IQ--rPnxQ4sZHihEESD6sKkLmwKBcKu8-Ne1Th8kP82ZDwr4=w2400'
    } else if (this.ruta === 'Pictures') {
      this.titulo = 'Pictures';
      this.descripcion = 'Las imágenes y gráficos en una interfaz agregan valor visual y emocional. Su integración adecuada mejora la experiencia del usuario y la comprensión de la información.';
      this.imgref = 'https://media.istockphoto.com/id/1174378351/vector/image-type-icons-multi-series.jpg?s=612x612&w=0&k=20&c=hiiu0FLH6J349qU9PJlkP0ga3F3RzcovII7z4Ph5qD8='
    } else if (this.ruta === 'Links') {
      this.titulo = 'Links';
      this.descripcion = 'Los enlaces o vínculos son elementos esenciales para la navegación. Un diseño claro y distintivo de enlaces facilita la interacción y la orientación del usuario dentro de la aplicación.';
      this.imgref = 'https://cdn4.vectorstock.com/i/1000x1000/16/88/link-icon-vector-2721688.jpg'
    } else if (this.ruta === 'Progress_Indication') {
      this.titulo = 'Progress Indicators';
      this.descripcion = 'Los indicadores de progreso informan al usuario sobre el avance de una tarea o proceso. Un diseño efectivo de estos indicadores mejora la percepción del tiempo y la interacción del usuario.';
      this.imgref = 'https://img.freepik.com/premium-vector/loading-process-icons-set_175838-587.jpg'
    } else if (this.ruta === 'Maps') {
      this.titulo = 'Maps';
      this.descripcion = 'La integración de mapas proporciona información geoespacial valiosa. Un diseño interactivo y fácil de usar de mapas mejora la experiencia del usuario en aplicaciones relacionadas con la ubicación.';
      this.imgref = 'https://cdn1.iconfinder.com/data/icons/map-and-navigation-2-3/128/63-512.png'
    }else if (this.ruta === 'Actions') {
      this.titulo = 'Buttons';
      this.descripcion = 'Los botones son los que desencadenaran varias de las funcionalidades por lo que es necesario que sean faciles de entender';
      this.imgref = 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F959dfe75-2526-4365-a493-8e636219d932_960x540.png'
    }else if (this.ruta === 'Formularios') {
      this.titulo = 'Formularios';
      this.descripcion = 'Los formularios son los que permiten al usuario ingresar sus datos a la aplicacion por lo que es necesario que sean faciles de entender';
      this.imgref = 'https://cdn-icons-png.flaticon.com/512/402/402114.png'
    }else if (this.ruta === 'TextFields') {
      this.titulo = 'TextFields';
      this.descripcion = 'Los TextFields o campos de texto son los que permiten al usuario ingresar datos no numericos a la aplicacion por lo que es necesario que sean faciles de entender';
      this.imgref = 'https://www.sketchappsources.com/resources/source-image/material-ui-kit-icon-text-fields.jpg'
    }else if (this.ruta === 'Complex_Forms') {
      this.titulo = 'Formularios Complejos';
      this.descripcion = 'Los formularios Complejos son los que permiten al usuario ingresar una gran cantidad de datos a la aplicacion por lo que es necesario que sean faciles de entender';
      this.imgref = 'https://cdn-icons-png.flaticon.com/512/402/402114.png'
    }else if (this.ruta === 'NumberFields') {
      this.titulo = 'NumberFields';
      this.descripcion = 'Son elementos de formulario utilizados para ingresar y manipular valores numéricos dentro de una aplicación web o un sistema de software.';
      this.imgref = 'https://assets-global.website-files.com/5f5298baab4c43a7f0640b67/608c84f51024a22b4fa09a62_Group%20988.png'
    }else if (this.ruta === 'Search') {
      this.titulo = 'Search';
      this.descripcion = 'Son elementos  que permiten a los usuarios encontrar información específica dentro de un conjunto de datos, documentos, contenido web, o en una aplicación en general';
      this.imgref = 'https://img.freepik.com/premium-vector/various-search-bar-templates-internet-browser-engine-with-search-box-address-bar-text-field-ui-design-website-interface-element-with-web-icons-push-button-vector-illustration_970024-7842.jpg?w=2000'
    }
  }
  scrollToCards() {
    if (this.cardsSection) {
      this.cardsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
