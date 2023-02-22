export interface AvgDuration {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface AvgPace {
  minutes: number;
  seconds: number;
}

export interface Duration {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Pace {
  minutes: number;
  seconds: number;
}

export interface Attendance {
  checkedIn: boolean;
  checkedOut: boolean;
  date: string;
  duration: Duration;
  mileage: number;
  pace: Pace;
  finish: number;
  start: number;
  _id: string;
}

export interface Race {
  id: number;
  name: string;
  type: string;
  attendance: Attendance[];
}

export interface Goal {
  race: Race;
  category: string;
  date: string;
  mileage: number;
  progress: number;
  target: number;
  type: string;
  _id: string;
}

export interface Settings {
  defaultFields: string[];
  _id: string;
}

export interface User {
  _id: string;
  user_id: number;
  email: string;
  email_lower: string;
  first_name: string;
  last_name: string;
  password: string;
  phone: string;
  username?: string;
  username_lower?: string;
  avgDuration: AvgDuration;
  avgMileage: number;
  avgPace: AvgPace;
  goals: Goal[];
  settings: Settings;
}

export interface UserContextValue {
  userContext: User;
}

