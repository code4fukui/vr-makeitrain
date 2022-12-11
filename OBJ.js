import { OBJLoader } from "https://unpkg.com/three@0.111.0/examples/jsm/loaders/OBJLoader.js"

const loadOBJ = async (file) => {
  return new Promise((resolve) => {
    const loader = new OBJLoader();
    loader.load(file, resolve);
  });
};

export const OBJ = { load: loadOBJ };
