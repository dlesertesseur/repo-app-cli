import uuid from "react-uuid";

function findTraduction(locale, field, translations) {
  let value = null;

  if (translations !== null && translations !== undefined) {
    const translate = translations?.find((t) => t.locale === locale);

    if (translate !== null && translate !== undefined) {
      if (field in translate) {
        value = translate[field];
      }
    }
  }
  return value;
}

function findTranslatedField(locale, obj, field) {
  let value = null;

  if (obj !== null && obj?.translations != null) {
    value = findTraduction(locale, field, obj?.translations);
  }
  return value !== null ? value : obj[field];
}

function getFillColor(type) {
  let color;

  switch (type) {
    case 1:
      //color = "#b3ecff";
      color = "#e5e5e5";
      break;
    case 2:
      color = "#1a66ff";
      break;
    case 3:
      color = "#a3c2c2";
      break;

    default:
      color = "#e5e5e5";
      break;
  }
  return color;
}

function getStrokeColor(type) {
  let color;

  switch (type) {
    case 1:
      //color = "#80dfff";
      color = "#e5e5e5";
      break;
    case 2:
      color = "#004de6";
      break;
    case 3:
      color = "#85adad";
      break;

    default:
      color = "#e5e5e5";
      break;
  }

  return color;
}

function getModulePartColor(type) {
  let color;

  switch (type) {
    case 1:
      color = "#468faf";
      break;
    case 2:
      color = "#d3d3d3";
      break;
    case 3:
      color = "#468faf";
      break;
    case 4:
      color = "#468faf";
      break;
    case 5:
      color = "#F8F9D7";
      break;

    default:
      color = "#ff00ff";
      break;
  }

  return color;
}

function getModulePartStrokeColor(type) {
  let color;

  switch (type) {
    case 1:
      color = "#468faf";
      break;
    case 2:
      color = "#d3d3d3";
      break;
    case 3:
      color = "#468faf";
      break;
    case 4:
      color = "#468faf";
      break;
    case 5:
      color = "#F8F9D7";
      break;

    default:
      color = "#ff00ff";
      break;
  }

  return color;
}

function getModulePartSelectedColor(type) {
  let color;

  switch (type) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      color = "#ff0000";
      break;

    default:
      color = "#ff0000";
      break;
  }

  return color;
}

function getRackSelectedColor() {
  const color = "#ff0000";
  return color;
}

function getPartSelectedColor() {
  const color = "#ff0000";
  return color;
}

const createPartTemplate = (id, x = 0, y = 0, partType) => {

  console.log("createPartTemplate -> " + partType);
  const part = {
    id: id,
    name: partType.toUpperCase(),
    primitivetype: 100,
    positionx: x,
    positiony: 0,
    positionz: y,
    color: getPartFillColor(partType),
    timestamp: null,
    borderColor: getPartStrokeColor(partType),
    geometries: [
      {
        id: uuid(),
        name: "GEOMETRY",
        type: "polygon",
        timestamp: null,
        pixelmeterrelation: null,
        thickness: 2,
        path: "",
        points: [],
      },
    ],
  };
  return part;
};

function getPartFillColor(type) {
  let color;

  switch (type) {
    case "wall":
      color = "#0000BF";
      break;
    case "column":
      color = "#BBBBB9";
      break;
    case "zone":
      color = "#f6c345";
      break;

    default:
      color = "#ff00ff";
      break;
  }

  return color;
}

function getPartStrokeColor(type) {
  let color;

  switch (type) {
    case "wall":
      color = "#0000AB";
      break;
    case "column":
      color = "#959594";
      break;
    case "zone":
      color = "#ddaf3e";
      break;

    default:
      color = "#ff00ff";
      break;
  }

  return color;
}

function colorList(){
  const ret = [
    "#25262b",
    "#868e96",
    "#fa5252",
    "#e64980",
    "#be4bdb",
    "#7950f2",
    "#4c6ef5",
    "#228be6",
    "#15aabf",
    "#12b886",
    "#40c057",
    "#82c91e",
    "#fab005",
    "#fd7e14",
  ]
  return(ret);
}

function formatDateToDDMMYYYY(inputDate) {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

    date = date
        .toString()
        .padStart(2, '0');

    month = month
        .toString()
        .padStart(2, '0');

  return `${date}/${month}/${year}`;
}

export {
  findTranslatedField,
  getFillColor,
  getStrokeColor,
  getModulePartColor,
  getModulePartStrokeColor,
  getModulePartSelectedColor,
  getRackSelectedColor,
  getPartSelectedColor,
  createPartTemplate,
  getPartFillColor,
  getPartStrokeColor,
  colorList,
  formatDateToDDMMYYYY
};
