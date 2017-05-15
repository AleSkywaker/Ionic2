
import { Directive, ElementRef, HostListener, Injector } from '@angular/core';

/**
 * Generated class for the BackgroundYellow directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[bcgyellow]' // Attribute selector
})

export class BackgroundYellowDirective {

   constructor(private el:ElementRef) {
   // this.el.nativeElement.style.backgroundColor = "yellow";
    console.log('Hello BackgroundYellow Directive');
  }


  




    @HostListener('mouseenter') onMouseEnter() {
    this.highlight( 'red');
    //alert("Hola Alex");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    //alert("Hasta ahora Alex");
  }

private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

 

}
