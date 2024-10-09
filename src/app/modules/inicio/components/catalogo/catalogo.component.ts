import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  
}

const nodes = Array.from(document.querySelectorAll('li'));

const directions: { [key: number]: string } = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
const classNames: string[] = ['in', 'out'].flatMap(p =>
  Object.values(directions).map(d => `${p}-${d}`)
);

const getDirectionKey = (ev: MouseEvent, node: HTMLElement): number => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = (l - (width / 2) * (width > height ? height / width : 1));
  const y = (t - (height / 2) * (height > width ? width / height : 1));
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

class Item {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
    this.element.addEventListener('mouseover', (ev: MouseEvent) => this.update(ev, 'in'));
    this.element.addEventListener('mouseout', (ev: MouseEvent) => this.update(ev, 'out'));
  }

  update(ev: MouseEvent, prefix: string) {
    this.element.classList.remove(...classNames);
    const directionKey = getDirectionKey(ev, this.element);
    this.element.classList.add(`${prefix}-${directions[directionKey]}`);
  }
}

nodes.forEach(node => new Item(node as HTMLElement));
