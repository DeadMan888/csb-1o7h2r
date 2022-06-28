/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bala extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Bala", "./Bala/costumes/Bala.svg", {
        x: 2.1738281250000284,
        y: 9.651720577142754
      }),
      new Costume("Explota", "./Bala/costumes/Explota.svg", {
        x: 4.481770833333371,
        y: 4.333335000000005
      })
    ];

    this.sounds = [
      new Sound("shoot ", "./Bala/sounds/shoot .wav"),
      new Sound("invaderkilled", "./Bala/sounds/invaderkilled.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Disparar" },
        this.whenIReceiveDisparar
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveDisparar() {
    this.costume = "Bala";
    this.goto(this.stage.vars.posNaveX, -160);
    this.createClone();
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      this.y += 10;
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites[undefined].andClones())) {
        this.deleteThisClone();
      }
      if (this.touching(this.sprites["Marciano"].andClones())) {
        this.costume = "Explota";
        yield* this.startSound("invaderkilled");
        yield* this.wait(0.05);
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, -160);
  }
}
