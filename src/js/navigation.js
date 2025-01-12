export class Navigation {
    
    constructor(camera, range, gui) {
        this.camera = camera;
        this.range = range;
        this.gui = gui;

        this.navigationSettings = {
            top: this.setTopView.bind(this),
            bottom: this.setBottomView.bind(this),
            left: this.setLeftView.bind(this),
            right: this.setRightView.bind(this),
            front: this.setFrontView.bind(this),
            back: this.setBackView.bind(this),
        };
    }

    initGUI() {
        this.nav = this.gui.addFolder('Navigation');
        this.nav.add(this.navigationSettings, 'top');
        this.nav.add(this.navigationSettings, 'bottom');
        this.nav.add(this.navigationSettings, 'left');
        this.nav.add(this.navigationSettings, 'right');
        this.nav.add(this.navigationSettings, 'front');
        this.nav.add(this.navigationSettings, 'back');
    }

    setTopView() {
        this.camera.position.x = 0;
        this.camera.position.y = this.range;
        this.camera.position.z = 0;
    }

    setBottomView() {
        this.camera.position.x = 0;
        this.camera.position.y = -this.range;
        this.camera.position.z = 0;
    }

    setRightView() {
        this.camera.position.x = this.range;
        this.camera.position.y = 0;
        this.camera.position.z = 0;
    }

    setLeftView() {
        this.camera.position.x = -this.range;
        this.camera.position.y = 0;
        this.camera.position.z = 0;
    }

    setFrontView() {
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = this.range;
    }

    setBackView() {
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = -this.range;
    }
    
}
