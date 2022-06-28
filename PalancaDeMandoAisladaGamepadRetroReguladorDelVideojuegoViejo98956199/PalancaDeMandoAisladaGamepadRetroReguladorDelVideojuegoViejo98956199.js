/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PalancaDeMandoAisladaGamepadRetroReguladorDelVideojuegoViejo98956199 extends Sprite {
  constructor(...args) {
    super(...args);

    this.visible = false;

    this.costumes = [
      new Costume(
        "palanca-de-mando-aislada-gamepad-retro-regulador-del-videojuego-viejo-98956199",
        "./PalancaDeMandoAisladaGamepadRetroReguladorDelVideojuegoViejo98956199/costumes/palanca-de-mando-aislada-gamepad-retro-regulador-del-videojuego-viejo-98956199.png",
        { x: 311, y: 138 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Usted es digno de ir a nuestro juego." },
        this.whenIReceiveUstedEsDignoDeIrANuestroJuego
      )
    ];
  }

  *whenIReceiveUstedEsDignoDeIrANuestroJuego() {
    yield* this.sayAndWait("Usted es digno de entrar a nuestro juego.", 5);
    this.visible = false;
  }
}
