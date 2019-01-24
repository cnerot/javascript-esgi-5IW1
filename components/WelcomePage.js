class WelcomePage extends Page {

    constructor(props) {
        super(props);
    }
    build_page() {
        this.img("new_employee_welcome.jpg");
        this.break();
        this.text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis sapien pretium enim hendrerit efficitur. Donec nibh lectus, ultricies vel velit at, efficitur fermentum elit. Maecenas id nibh iaculis, placerat ante et, cursus leo. Phasellus at convallis justo. In hac habitasse platea dictumst. Praesent interdum posuere faucibus. Cras dictum consequat ligula, vitae porttitor orci vulputate nec. Donec in eros porta, elementum ex nec, egestas purus.");
        this.break();
        this.break();
        this.title("How it Works", 2);
        this.text("Pellentesque sollicitudin quam at lorem iaculis, id blandit risus fermentum. Praesent molestie, mauris at finibus ultricies, quam neque aliquet neque, nec ullamcorper ante elit malesuada justo. Quisque placerat est tortor, et pellentesque orci placerat nec. Pellentesque vel tellus id lacus scelerisque porttitor porttitor quis ante. Vivamus tempor consequat eros, vel vulputate turpis efficitur ac. Maecenas venenatis metus malesuada erat tincidunt consequat. Duis ultrices ante nec lectus imperdiet bibendum. Pellentesque mi metus, ornare eu erat ac, venenatis tincidunt justo. Integer nunc urna, tincidunt a urna at, iaculis rutrum dui. Curabitur nec ultrices enim. Donec cursus non augue ac fermentum. Nulla ut mattis arcu.");
        this.img("howitworks.png");
        this.break();
        this.title("Contributors", 2);
        this.text("Nam rhoncus eleifend turpis. Nunc egestas iaculis interdum. Duis sit amet finibus erat. Donec congue ac enim vitae elementum. Aenean justo lacus, auctor quis tellus id, semper pellentesque lectus. Maecenas in magna aliquet, vulputate mauris sed, pellentesque diam. Mauris convallis odio quam, ut scelerisque ante facilisis vel. Sed ante odio, interdum ut pellentesque sit amet, dictum sed enim. Suspendisse sollicitudin pulvinar rhoncus. Duis facilisis maximus nulla, nec luctus nisi luctus id. Sed purus ex, commodo non faucibus sed, lobortis at ex. Aliquam eleifend ultrices diam. Sed quis fermentum diam. Curabitur vitae purus sed tellus pellentesque mattis eget quis lorem.");
        this.break();
    }

}