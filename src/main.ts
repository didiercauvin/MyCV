import 'pixi.js';

class Main {
    private type = "WebGL";
    private app: PIXI.Application;

    public constructor() {
        if (!PIXI.utils.isWebGLSupported()) {
            this.type = "canvas";
        }
        
        PIXI.utils.sayHello(this.type);
        this.app = new PIXI.Application({width: 256, height: 256});
        this.app.renderer.backgroundColor = 0x061639;
    }

    public init() { 
        document.body.appendChild(this.app.view);
        PIXI.loader
            .add("src/assets/images/cat.png")
            .load(this.setup(this.app)); 
    } 

    private setup(app: PIXI.Application) {
        return () => {
            let cat = new PIXI.Sprite(PIXI.loader.resources["src/assets/images/cat.png"].texture);
            cat.x = 50; 
            cat.y = 50;
            app.stage.addChild(cat); 
        };
    } 
}

const main = new Main();
main.init();  



