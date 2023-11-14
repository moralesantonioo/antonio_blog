import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkThemeActive: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const boton = this.document.querySelector('#btn1');

    if (boton instanceof HTMLElement) {
      this.renderer.listen(boton, 'mouseover', () => {
        this.handleMouseOver(boton);
      });
    }
  }

  private handleMouseOver(boton: HTMLElement) {
    if (boton.classList.contains('posicion_normal')) {
      this.renderer.removeClass(boton, 'posicion_normal');
      this.renderer.addClass(boton, 'move1');
    } else if (boton.classList.contains('move1')) {
      this.renderer.removeClass(boton, 'move1');
      this.renderer.addClass(boton, 'move2');
    } else if (boton.classList.contains('move2')) {
      this.renderer.removeClass(boton, 'move2');
      this.renderer.addClass(boton, 'move3');
    } else if (boton.classList.contains('move3')) {
      this.renderer.removeClass(boton, 'move3');
      this.renderer.addClass(boton, 'posicion_normal');
    }
  }
}
