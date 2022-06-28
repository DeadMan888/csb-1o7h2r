/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Marciano extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Marciano ", "./Marciano/costumes/Marciano .png", {
        x: 266,
        y: 272
      }),
      new Costume("Marciano 2", "./Marciano/costumes/Marciano 2.png", {
        x: 397,
        y: 289
      }),
      new Costume("Marciano 3", "./Marciano/costumes/Marciano 3.png", {
        x: 397,
        y: 289
      }),
      new Costume("Marciano 4", "./Marciano/costumes/Marciano 4.png", {
        x: 370,
        y: 306
      }),
      new Costume("Marciano 5", "./Marciano/costumes/Marciano 5.png", {
        x: 370,
        y: 306
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Comienza juego." },
        this.whenIReceiveComienzaJuego
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveComienzaJuego() {
    this.visible = true;
    yield* this.crearMarciano(1, -200, 140);
    yield* this.crearMarciano(2, -200, 100);
    yield* this.crearMarciano(3, -200, 60);
    yield* this.crearMarciano(4, -200, 20);
    yield* this.crearMarciano(5, -200, -20);
  }

  *crearMarciano(disfraz, x, y) {
    this.visible = false;
    this.costume = disfraz;
    this.goto(x, y);
    for (let i = 0; i < 8; i++) {
      this.createClone();
      this.move(55);
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    while (!this.touching(this.sprites["Bala"].andClones())) {
      yield;
    }
    this.stage.vars.puntos += 15;
    yield* this.wait(0.05);
    this.deleteThisClone();
  }

  *startAsClone2() {
    yield* this.mover(1);
  }

  *mover(tiempo) {
    while (true) {
      for (let i = 0; i < 10; i++) {
        this.x += 4;
        yield* this.wait(tiempo);
        yield;
      }
      this.y += -40;
      for (let i = 0; i < 10; i++) {
        this.x += -4;
        yield* this.wait(tiempo);
        yield;
      }
      this.y += -40;
      yield;
    }
  }

  *startAsClone3() {
    while (true) {
      if (this.stage.vars.puntos == 600) {
        this.broadcast("Winner");
      }
      if (this.y < -135) {
        this.broadcast("Game Over");
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
