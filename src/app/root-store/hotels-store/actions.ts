import { Action } from '@ngrx/store';
import { Hotel } from '../../models/hotel';

export enum ActionTypes {
  LOAD_REQUEST = '[Hotels] Load Request',
  LOAD_FAILURE = '[Hotels] Load Failure',
  LOAD_SUCCESS = '[Hotels] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Hotel[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;