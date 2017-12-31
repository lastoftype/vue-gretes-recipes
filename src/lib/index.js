import { parse } from 'recipe-ingredient-parser';

export function formatUnit(unit) {
  if (unit === 'ounce') {
    return 'oz';
  } else if (unit === 'teaspoon' || unit === 'Tsp') {
    return 'tsp';
  } else if (unit === 'tablespoon' || unit === 'tbsp') {
    return 'Tbsp';
  } else {
    return unit;
  }
}

export function formatQuantity(quantity) {
  if (quantity === '0.5') {
    return '½';
  } else if (quantity === '0.333') {
    return '⅓';
  } else if (quantity === '0.666') {
    return '⅔';
  } else if (quantity === '0.25') {
    return '¼';
  } else if (quantity === '0.75') {
    return '¾';
  } else if (quantity === '0.125') {
    return '⅛';
  } else if (quantity.endsWith('.5')) {
    return quantity.substring(0, quantity.length - 2) + ' ½';
  } else if (quantity.endsWith('.25')) {
    return quantity.substring(0, quantity.length - 2) + ' ¼';
  } else {
    return quantity;
  }
}

export function capitalizeFirstLetter(string) {
  return string;
}

export function parseIngredients(value) {
  let array = [];
  let parsedByLine = value.split('\n').map((item, key) => {

    if (item === null || item === '') return;
    item = item.replace(/\t/g, ' ')

    let obj = parse(item);
    array.push(obj);
  });

  return array;
}

export function parseSteps(string) {
  let array = [];
  let parsedByLine = string.split('\n').map(item => {
    if (item === null || item === '') return;
    let obj = { text: item };
    array.push(obj);
  });
  return array;
}

export function parseTags(value) {
  let array = [];
  let parsedByComma = value.split(',').map((item, key) => {
    if (item === null || item === '') return;
    array.push(item.trim());
  });
  return array;
}


export function unparseSteps(steps) {
  let string = '';
  steps.map(({ text }, i) => {
    if (text && text !== null) string += text;
    if (i < steps.length - 1) string += '\n';
    return false;
  });
  return string;
}

export function unparseIngredients(ingredients) {
  let string = '';
  ingredients.map(({ quantity, unit, ingredient }, i) => {
    if (quantity && quantity !== "null") string += quantity + ' ';
    if (unit && unit !== "null") string += unit + ' ';
    if (ingredient && ingredient !== "null") string += ingredient;
    if (i < ingredients.length - 1) string += '\n';
    return false;
  });
  return string;
}

export function unparseTags(tagArray) {
  return tagArray.join(', ');
}
