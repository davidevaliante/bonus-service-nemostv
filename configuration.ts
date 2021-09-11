export interface Config {
  streamerId: string | number;
  streamerName: string;
  api: string;
  primaryColor: string;
  secondaryColor: string;
  fontString: string;
  font: string;
  youtubeMetatag?: string;
  geoApi: string;
}

export const defaultConfig: Config = {
  streamerId: 20,
  streamerName: "NemoTV",
  api: "https://compare.topadsservices.com",
  primaryColor: "#262626",
  secondaryColor: "#4d94ff",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export let configuration: Config = {
  streamerId: 20,
  streamerName: "NemoTV",
  api: "https://compare.topadsservices.com",
  primaryColor: "#262626",
  secondaryColor: "#4d94ff",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export const setConfigurationFile = (newConfig: Config = configuration) => {
  configuration = newConfig;
};
