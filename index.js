import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import SpaceInvaders from "./SpaceInvaders/SpaceInvaders.js";
import PalancaDeMandoAisladaGamepadRetroReguladorDelVideojuegoViejo98956199 from "./PalancaDeMandoAisladaGamepadRetroReguladorDelVideojuegoViejo98956199/PalancaDeMandoAisladaGamepadRetroReguladorDelVideojuegoViejo98956199.js";
import NaveSi from "./NaveSi/NaveSi.js";
import Bala from "./Bala/Bala.js";
import Marciano from "./Marciano/Marciano.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  SpaceInvaders: new SpaceInvaders({
    x: 33,
    y: -5,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  PalancaDeMandoAisladaGamepadRetroReguladorDelVideojuegoViejo98956199: new PalancaDeMandoAisladaGamepadRetroReguladorDelVideojuegoViejo98956199(
    { x: 3, y: -1, direction: 90, costumeNumber: 1, size: 35, visible: true }
  ),
  NaveSi: new NaveSi({
    x: 227,
    y: -160,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: false
  }),
  Bala: new Bala({
    x: 0,
    y: -160,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Marciano: new Marciano({
    x: 240,
    y: -20,
    direction: 90,
    costumeNumber: 5,
    size: 11,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
