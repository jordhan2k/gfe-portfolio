export interface IState {
  name: string;
  state_code: string;
}

export interface ICountry {
  name: string;
  iso2: string;
  iso3: string;
  states?: IState[];
}

export interface IGetCountryList {
  data: ICountry[];
  error: boolean;
  msg: string;
}
