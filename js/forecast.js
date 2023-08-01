const KEY = "082855b6ab9c5af85d7eb9fc8d611808";

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&appid=${KEY}`;
  loader(true);
  const req = await fetch(base + query);
  const data = await req.json();
  loader(false);
  return data;
};
