
export function div(str: string): HTMLElement {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div;
}

export function render(nodes: HTMLElement[]): void {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '';
    nodes.forEach(n => app.appendChild(n));
  }
}
