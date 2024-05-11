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
            label: 'Style Foundations', icon: 'pi pi-fw pi-palette', routerLink:"/main-guidelines",
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
                    label: 'Tipografía',
                    routerLink:"/guidelines/Tipografia"    
                },
                { 
                    separator: true 
                }, 
                {
                    label: 'Color', 
                    routerLink:"/guidelines/Color"   
                }                
            ]
        },
        {
            label: 'Components', icon: 'pi pi-fw pi-th-large',
            items:[
                {
                    label: 'Selection',
                    icon : 'pi pi-fw pi-check',
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
                        { 
                            separator: true 
                        },
                        {
                            label: 'Menus'    ,
                            routerLink:"/guidelines/Menus"   
                        },
                    ]  
                },
                { 
                    separator: true 
                },
                {
                    label: 'Containment',
                    icon : 'pi pi-fw pi-list',
                    items: [
                        {
                            label: 'Lists'   ,
                            routerLink:"/guidelines/Listas"    
                        }, 
                        { 
                            separator: true 
                        },
                        {
                            label: 'Tables' ,
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
                    icon : 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'TextFields'    
                            ,routerLink:"/guidelines/TextFields"  
                        },
                        { 
                            separator: true ,
                            
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
                            routerLink:"/guidelines/Complex_Forms"     
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'DatePicker' ,
                            routerLink:"/guidelines/TimePickers"     
                        }        
                    ]  
                },                
                { 
                    separator: true 
                },                
                {
                    label: 'Buttons',
                    icon : 'pi pi-fw pi-caret-right',
                    routerLink:"/guidelines/Actions" , 
                    items:[
                        {
                            label: 'Icon Buttons',
                            routerLink:"/guidelines/Icon_Buttons"      
                        },
                        { 
                            separator: true 
                        },
                        {
                            label: 'Search',
                            routerLink:"/guidelines/Search"      
                        }
                    ] 
                },
            ]
        },
        {
            label: 'Interfaces', icon: 'pi pi-fw pi-clone',
            routerLink: ['/main-interfaces']
        }
    ]
  }
}
