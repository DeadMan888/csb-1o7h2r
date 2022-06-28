/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SpaceInvaders extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Space Invaders",
        "./SpaceInvaders/costumes/Space Invaders.png",
        { x: 337, y: 262 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.cDigo = "SPACE INVADERS";
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "fondo1";
    yield* this.askAndWait("Introduce la clave para ingresar.");
    this.vars.cDigo = "SPACE INVADERS";
    yield* this.thinkAndWait("Hmm...", 2.3);
    while (!(this.vars.cDigo == this.answer)) {
      yield* this.sayAndWait(
        "Lo siento, pero no es la respuesta que se busca detective.",
        5
      );
      yield* this.sayAndWait("Inténtelo nuevamente o más tarde, de favor.", 5);
      yield* this.askAndWait("Introduce la clave para ingresar.");
      yield;
    }
    if (this.answer == this.vars.cDigo) {
      yield* this.sayAndWait(
        "¡Excelente detective!, usted ha descubierto el misterio.",
        5
      );
      this.visible = false;
    }
    this.broadcast("Usted es digno de ir a nuestro juego.");
  }
}
