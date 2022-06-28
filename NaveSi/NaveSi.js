/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NaveSi extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Nave SI", "./NaveSi/costumes/Nave SI.png", {
        x: 228,
        y: 152
      })
    ];

    this.sounds = [new Sound("shoot ", "./NaveSi/sounds/shoot .wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Comienza juego." },
        this.whenIReceiveComienzaJuego
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Comienza juego." },
        this.whenIReceiveComienzaJuego2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveComienzaJuego() {
    this.visible = true;
    this.stage.vars.posNaveX = 0;
    this.goto(this.stage.vars.posNaveX, -160);
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.x += -10;
        this.stage.vars.posNaveX = this.x;
      }
      if (this.keyPressed("right arrow")) {
        this.x += 10;
        this.stage.vars.posNaveX = this.x;
      }
      yield;
    }
  }

  *whenIReceiveComienzaJuego2() {
    while (true) {
      if (this.keyPressed("space")) {
        this.broadcast("Disparar");
        yield* this.startSound("shoot ");
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
