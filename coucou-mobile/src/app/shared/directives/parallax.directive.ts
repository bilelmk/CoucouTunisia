import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('appParallax') imageEl: any;
  private moveImage: number ;
  private scaleImage: number ;

  constructor(private renderer: Renderer2 ,
              private domCtrl: DomController) { }

  @HostListener('ionScroll' , ['$event']) onContentScroll($event: any) {
    const scrollTop = $event.detail.scrollTop ;

    if (scrollTop > 0) {
      this.moveImage = scrollTop / 3 ;
      this.scaleImage = 1;
    } else {
      this.moveImage = scrollTop / 1.2 ;
      this.scaleImage = -scrollTop / 200 + 1 ;
    }

    this.domCtrl.write(
        () => {
          this.renderer.setStyle(this.imageEl ,
              'webkitTransform' , 'translate3d(0,' + this.moveImage + 'px,0) scale(' + this.scaleImage + ',' + this.scaleImage + ')'
          );
        }
    );
  }
}
