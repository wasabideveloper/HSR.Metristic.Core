import {Report} from "./../report/report";


export interface Check {
	execute(directory: string, callback: (report: Report, errors?: Error[]) => void): void;
}

export interface CheckConstructor {
	new (options: { [name: string]: any }): Check;
}
