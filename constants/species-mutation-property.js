export default function SpeciesProperty(key) {
  const value = {
    faoCode: "Kode FAO",
    typeOfFish: "Tipe Ikan",
    scientificName: "Nama Saintifik",
    englishName: "Nama Inggris",
    indonesianName: "Nama Indonesia",
    localName: "Nama Lokal",
    typeOfWater: "Tipe Air",
    imageUrl: "URL Gambar",
    statusInIndonesia: "Status di Indonesia",
    fishUtilization: "Pemanfaatan Ikan",
  };
  return value[key];
}
