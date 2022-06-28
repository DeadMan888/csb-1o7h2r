/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fondo1", "./Stage/costumes/fondo1.svg", { x: 240, y: 180 }),
      new Costume("Juego", "./Stage/costumes/Juego.svg", {
        x: 454.475030974212,
        y: 276
      }),
      new Costume("Game Over", "./Stage/costumes/Game Over.svg", {
        x: 471.59594741531237,
        y: 369.0253503620214
      }),
      new Costume("Winner", "./Stage/costumes/Winner.svg", {
        x: 583.9172125495618,
        y: 304.18699019278404
      })
    ];

    this.sounds = [
      new Sound("spaceinvaders1", "./Stage/sounds/spaceinvaders1.mp3")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Usted es digno de ir a nuestro juego." },
        this.whenIReceiveUstedEsDignoDeIrANuestroJuego
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Winner" },
        this.whenIReceiveWinner
      )
    ];

    this.vars.miVariable = 0;
    this.vars.posNaveX = 227;
    this.vars.puntos = 600;
  }

  *whenIReceiveUstedEsDignoDeIrANuestroJuego() {
    yield* this.wait(7);
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
    this.vars.puntos = 0;
    this.broadcast("Comienza juego.");
    yield* this.playSoundUntilDone("spaceinvaders1");
  }

  *whenIReceiveGameOver() {
    this.costume = "Game Over";
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveWinner() {
    this.costume = "Winner";
    /* TODO: Implement stop all */ null;
  }
}
