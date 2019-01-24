class ExamplePage extends Page {

    constructor(props) {
        super(props);
    }
    build_page() {
        this.title("Examples");
        this.break();
        this.title("Search Bar", 2);
        this.break();
        this.text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis sapien pretium enim hendrerit efficitur. Donec nibh lectus, ultricies vel velit at, efficitur fermentum elit. Maecenas id nibh iaculis, placerat ante et, cursus leo. Phasellus at convallis justo. In hac habitasse platea dictumst. Praesent interdum posuere faucibus. Cras dictum consequat ligula, vitae porttitor orci vulputate nec. Donec in eros porta, elementum ex nec, egestas purus.");
        this.add(new AdvancedStrings());
        this.break();
        this.title("Youtube Player", 2);
        this.text("Pellentesque sollicitudin quam at lorem iaculis, id blandit risus fermentum. Praesent molestie, mauris at finibus ultricies, quam neque aliquet neque, nec ullamcorper ante elit malesuada justo. Quisque placerat est tortor, et pellentesque orci placerat nec. Pellentesque vel tellus id lacus scelerisque porttitor porttitor quis ante. Vivamus tempor consequat eros, vel vulputate turpis efficitur ac. Maecenas venenatis metus malesuada erat tincidunt consequat. Duis ultrices ante nec lectus imperdiet bibendum. Pellentesque mi metus, ornare eu erat ac, venenatis tincidunt justo. Integer nunc urna, tincidunt a urna at, iaculis rutrum dui. Curabitur nec ultrices enim. Donec cursus non augue ac fermentum. Nulla ut mattis arcu.");
        this.add(new Promise());
        this.break();
        this.title("Login Form", 2);
        this.text("Pellentesque sollicitudin quam at lorem iaculis, id blandit risus fermentum. Praesent molestie, mauris at finibus ultricies, quam neque aliquet neque, nec ullamcorper ante elit malesuada justo. Quisque placerat est tortor, et pellentesque orci placerat nec. Pellentesque vel tellus id lacus scelerisque porttitor porttitor quis ante. Vivamus tempor consequat eros, vel vulputate turpis efficitur ac. Maecenas venenatis metus malesuada erat tincidunt consequat. Duis ultrices ante nec lectus imperdiet bibendum. Pellentesque mi metus, ornare eu erat ac, venenatis tincidunt justo. Integer nunc urna, tincidunt a urna at, iaculis rutrum dui. Curabitur nec ultrices enim. Donec cursus non augue ac fermentum. Nulla ut mattis arcu.");
        //this.add(new LoginForm());
        this.break();
        this.title("Counter", 2);
        this.text("Pellentesque sollicitudin quam at lorem iaculis, id blandit risus fermentum. Praesent molestie, mauris at finibus ultricies, quam neque aliquet neque, nec ullamcorper ante elit malesuada justo. Quisque placerat est tortor, et pellentesque orci placerat nec. Pellentesque vel tellus id lacus scelerisque porttitor porttitor quis ante. Vivamus tempor consequat eros, vel vulputate turpis efficitur ac. Maecenas venenatis metus malesuada erat tincidunt consequat. Duis ultrices ante nec lectus imperdiet bibendum. Pellentesque mi metus, ornare eu erat ac, venenatis tincidunt justo. Integer nunc urna, tincidunt a urna at, iaculis rutrum dui. Curabitur nec ultrices enim. Donec cursus non augue ac fermentum. Nulla ut mattis arcu.");
        //this.add(new LoginForm());
        this.break();
    }
 
 }