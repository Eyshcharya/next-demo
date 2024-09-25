export function getRandomArrayElement() {
  const array: string[] = [];
  for (let i = 1; i <= 15; i++) {
    const formattedNumber = i.toString().padStart(2, '0');
    array.push(formattedNumber);
  }

  if (array.length === 0) {
    return undefined;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
