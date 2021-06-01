class Component {
}

class ComponentWithTemplate extends Component {
  render() {
    return '<div>Comp</div>'
  }
}

class HigherOrderComponent extends Component {
}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is imposible here');
  }

  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }
}

function renderComponent(component) {
  component.render();
}

renderComponent(new HeaderComponent);
renderComponent(new FooterComponent);
//renderComponent(new HOC);