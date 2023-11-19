import { Component,OnInit} from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  items: PanelMenuModule[] | undefined;
  display:any;
  ngOnInit() {
    this.display=true;
    this.items = [
        {
            label: 'Inicio', icon: 'pi pi-fw pi-home',routerLink:"/main"
        },
        {
            label: 'Guideline Foundations', icon: 'pi pi-fw pi-palette',
            items: [                 
                {
                    label: 'Information Architecture',    
                    routerLink:"/guidelines/IA"
                }, { 
                    separator: true 
                },
                {
                    label: 'Browser Window Features',
                    routerLink:"/guidelines/Browser_Window_Features"
                },
                { 
                    separator: true 
                },
                {
                    label: 'Tipography',
                    routerLink:"/guidelines/Tipografia"    
                },
                { 
                    separator: true 
                }, 
                {
                    label: 'Color', 
                    routerLink:"/guidelines/Color"   
                },
                { 
                    separator: true 
                },
                {
                    label: 'Selection',
                    items: [
                        {
                            label: 'CheckBox',
                            routerLink:"/guidelines/CheckBox"      
                        }, 
                        { 
                            separator: true 
                        },
                        {
                            label: 'ComboBox'    ,
                            routerLink:"/guidelines/ComboBox"   
                        },
                    ]  
                },
                { 
                    separator: true 
                },
                {
                    label: 'Containment',
                    items: [
                        {
                            label: 'Listas'   ,
                            routerLink:"/guidelines/Listas"    
                        }, 
                        { 
                            separator: true 
                        },
                        {
                            label: 'Tablas' ,
                            routerLink:"/guidelines/Tables"      
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'Dividers',
                            routerLink:"/guidelines/Dividers"       
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'Alert Messages' ,
                            routerLink:"/guidelines/Alert_Messages"     
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'Cards'  ,
                            routerLink:"/guidelines/Cards"    
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'Pictures',
                            routerLink:"/guidelines/Pictures"      
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'Links',
                            routerLink:"/guidelines/Links"      
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'Progress Indicators',
                            routerLink:"/guidelines/Progress_Indication"      
                        },
                         { 
                            separator: true 
                        },
                        {
                            label: 'Maps' ,
                            routerLink:"/guidelines/Maps"     
                        }
                        
                    ]  
                },
                { 
                    separator: true 
                },
                {
                    label: 'Input',
                    items: [
                        {
                            label: 'TextFields'    
                        },
                        { 
                            separator: true ,
                            routerLink:"/guidelines/TextFields"  
                        },
                        {
                            label: 'NumberFields' ,
                            routerLink:"/guidelines/NumberFields"     
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'Simple Forms'    ,
                            routerLink:"/guidelines/Formularios"  
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'Complex Forms' ,
                            routerLink:"/guidelines/Formularios"     
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'TimePicker' ,
                            routerLink:"/guidelines/TimePickers"     
                        }        
                    ]  
                },                
                { 
                    separator: true 
                },                
                {
                    label: 'Buttons',
                    routerLink:"/guidelines/Actions" , 
                    items:[
                        {
                            label: 'Search',
                            routerLink:"/guidelines/Searcg"      
                        }
                    ] 
                },
                
            ],
            routerLink: ['/main-guidelines'],
        },
        {
            label: 'Interfaces', icon: 'pi pi-fw pi-clone',
            routerLink: ['/main-interfaces']
        }
    ]
  }
}
