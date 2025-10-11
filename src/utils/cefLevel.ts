export const colors = [
  { border: 'border-blue-500', bg: 'bg-blue-50' },
  { border: 'border-green-500', bg: 'bg-green-50' },
  { border: 'border-purple-500', bg: 'bg-purple-50' },
];

export const getLevelId = (ceflevel: string) => {
  if (ceflevel.startsWith('A')) return 'level-0';
  if (ceflevel.startsWith('B')) return 'level-1';
  if (ceflevel.startsWith('C')) return 'level-2';
  return 'level-0';
};

export const getLevelIdColor = (levelId: string) => {
  const index = parseInt(levelId.split('-')[1]);
  return colors[index];
};

export const getLevelColor = (ceflevel: string) => {
  const levelId = getLevelId(ceflevel);
  return getLevelIdColor(levelId);
};
