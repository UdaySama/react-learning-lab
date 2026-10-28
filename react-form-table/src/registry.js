const modules = import.meta.glob("./day-*/*.{js,jsx}", { eager: true });

const collator = new Intl.Collator(undefined, { numeric: true });

const prettyName = (name) =>
  name
    .replace(/([a-zA-Z])(\d)/, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());

const daysMap = {};

Object.entries(modules).forEach(([file, mod]) => {
  const match = file.match(/^\.\/day-(\d+)\/(.+)\.(js|jsx)$/);
  if (!match || !mod.default) return;

  const dayNumber = Number(match[1]);
  const name = match[2];

  if (name.startsWith("_") || /Routes$/.test(name)) return;

  if (!daysMap[dayNumber]) {
    daysMap[dayNumber] = {
      id: `day-${dayNumber}`,
      title: `Day ${dayNumber}`,
      path: `/day-${dayNumber}`,
      number: dayNumber,
      apps: [],
    };
  }

  daysMap[dayNumber].apps.push({
    name: prettyName(name),
    path: name.toLowerCase(),
    comp: mod.default,
  });
});

const menuData = Object.values(daysMap)
  .sort((a, b) => a.number - b.number)
  .map((day) => ({
    ...day,
    apps: day.apps.sort((a, b) => collator.compare(a.path, b.path)),
  }));

export default menuData;