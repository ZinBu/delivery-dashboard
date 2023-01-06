export const itemsTypes = {
  PICKER: 'picker',
  COURIER: 'courier',
  TAXI: 'taxi',
  LUNCH: 'lunch',
  SMOKEBREAK: 'smoke',
  SELECTED: 'selected',
  PASSED: 'passed'
};

export const itemsTypesRus = {
  [itemsTypes.PICKER]: "Picker",
  [itemsTypes.COURIER]: "Courier",
  [itemsTypes.TAXI]: "Taxi",
  [itemsTypes.LUNCH]: "Lunch",
  [itemsTypes.SMOKEBREAK]: "Smoke break",
  [itemsTypes.PASSED]: "Passed",
};

class RGBA {
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  };

  getColorString(dimmedLevel = null) {
    const alpha = !dimmedLevel ? this.a : this.a / dimmedLevel;
    return`rgba(${this.r}, ${this.g}, ${this.b}, ${alpha})`
  }
}

class ItemStyle {
  whiteColor = new RGBA(255, 255, 255, 1);
  blackColor = new RGBA(0, 0, 0, 1);
  dimmedLevel = 1.8;

  constructor(blockColor, borderColor = null, textColor = null) {
    this.blockColor = blockColor;
    this.textColor = textColor;
    this.borderColor = borderColor;
  };

  _get_style(dimmed) {
    return {
      background: this.blockColor.getColorString(dimmed ? this.dimmedLevel : null),
      color: ((this.textColor && !dimmed) ? this.textColor : this.blackColor).getColorString(),
      border: `1px solid ${(this.borderColor ? this.borderColor : this.blackColor).getColorString()}`,
      borderRadius: 3,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  };

  get actual() {
    return this._get_style(false)
  };

  get passed() {
    return this._get_style(true)
  };
}

export const itemsStyles = {
  [itemsTypes.PICKER]: new ItemStyle(
    new RGBA(86, 67, 205, 0.58),
    new RGBA(48, 41, 96, 0.49),
    new RGBA(255, 255, 255, 1)
  ),
  [itemsTypes.COURIER]: new ItemStyle(
    new RGBA(153, 239, 127, 0.96),
    new RGBA(110, 203, 82, 1)
  ),
  [itemsTypes.TAXI]: new ItemStyle(
    new RGBA(255, 140, 0, 0.79),
    new RGBA(216,141,10,0.98)
  ),
  [itemsTypes.LUNCH]: new ItemStyle(
    new RGBA(252, 186, 211, 0.99),
    new RGBA(207, 94, 137, 0.99)
  ),
  [itemsTypes.SMOKEBREAK]: new ItemStyle(
    new RGBA(237, 113, 126, 0.6),
    new RGBA(207, 94, 137, 0.99)
  ),
  [itemsTypes.SELECTED]: new ItemStyle(
    new RGBA(255, 255, 0, 0.97),
  ),
  [itemsTypes.PASSED]: new ItemStyle(
    new RGBA(216, 216, 217, 0.4),
  ),
};
