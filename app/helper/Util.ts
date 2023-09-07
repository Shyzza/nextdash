const MONTHS = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export const months = (config: any) => {
  const cfg = config || {};
  const count = cfg.count || 10;
  const section = cfg.section;
  const values = [];
  let i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 10];
    values.push(value.substring(0, section));
  }

  return values;
};
