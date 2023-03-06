import { WITSML_INDEX_TYPE_DATE_TIME, WITSML_INDEX_TYPE_MD } from "../components/Constants";
import BhaRun from "./bhaRun";
import LogObject from "./logObject";
import Measure from "./measure";
import MessageObject from "./messageObject";
import MudLog from "./mudLog";
import { ObjectType, ObjectTypeToModel } from "./objectType";
import Rig from "./rig";
import RiskObject from "./riskObject";
import Trajectory from "./trajectory";
import Tubular from "./tubular";
import WbGeometryObject from "./wbGeometry";

export interface WellboreProperties {
  uid: string;
  name: string;
  wellUid: string;
  wellName?: string;
  wellStatus: string;
  wellType: string;
  isActive: boolean;
  number?: string;
  suffixAPI?: string;
  numGovt?: string;
  shape?: string;
  dTimeKickoff?: string;
  md?: Measure;
  tvd?: Measure;
  mdKickoff?: Measure;
  tvdKickoff?: Measure;
  mdPlanned?: Measure;
  tvdPlanned?: Measure;
  mdSubSeaPlanned?: Measure;
  tvdSubSeaPlanned?: Measure;
  dayTarget?: Measure;
  wellboreParentUid?: string;
  wellboreParentName?: string;
  wellborePurpose?: string;
  dateTimeCreation?: string;
  dateTimeLastChange?: string;
  itemState?: string;
}

export interface WellboreObjects {
  bhaRuns?: BhaRun[];
  logs?: LogObject[];
  rigs?: Rig[];
  trajectories?: Trajectory[];
  messages?: MessageObject[];
  mudLogs?: MudLog[];
  tubulars?: Tubular[];
  risks?: RiskObject[];
  wbGeometrys?: WbGeometryObject[];
}

export default interface Wellbore extends WellboreProperties, WellboreObjects {}

export function emptyWellbore(): Wellbore {
  return {
    uid: "",
    name: "",
    wellUid: "",
    wellName: "",
    wellStatus: "",
    wellType: "",
    isActive: false,
    wellboreParentUid: "",
    wellboreParentName: "",
    wellborePurpose: "unknown",
    dateTimeCreation: "",
    dateTimeLastChange: "",
    itemState: "",
    bhaRuns: [],
    logs: [],
    rigs: [],
    trajectories: [],
    tubulars: [],
    messages: [],
    mudLogs: [],
    risks: [],
    wbGeometrys: []
  };
}

export function wellboreHasChanges(wellbore: WellboreProperties, updatedWellbore: WellboreProperties): boolean {
  return JSON.stringify(wellbore) !== JSON.stringify(updatedWellbore);
}

export const calculateWellboreNodeId = (wellbore: Wellbore): string => {
  return wellbore.wellUid + wellbore.uid;
};

export const calculateObjectGroupId = (wellbore: Wellbore, objectType: ObjectType): string => {
  return calculateWellboreNodeId(wellbore) + objectType;
};

export const calculateLogTypeId = (wellbore: Wellbore, logType: string): string => {
  return calculateWellboreNodeId(wellbore) + logType;
};

export const calculateLogTypeDepthId = (wellbore: Wellbore): string => {
  return calculateLogTypeId(wellbore, WITSML_INDEX_TYPE_MD);
};

export const calculateLogTypeTimeId = (wellbore: Wellbore): string => {
  return calculateLogTypeId(wellbore, WITSML_INDEX_TYPE_DATE_TIME);
};

export const getWellboreProperties = (wellbore: Wellbore): Map<string, string> => {
  return new Map([
    ["Well", wellbore.wellName],
    ["UID Well", wellbore.wellUid],
    ["Wellbore", wellbore.name],
    ["UID Wellbore", wellbore.uid]
  ]);
};

export function getObjectFromWellbore<Key extends ObjectType>(wellbore: Wellbore, uid: string, objectType: Key): ObjectTypeToModel[Key] {
  let objects: any[] = null;
  switch (objectType) {
    case ObjectType.BhaRun:
      objects = wellbore.bhaRuns;
      break;
    case ObjectType.Log:
      objects = wellbore.logs;
      break;
    case ObjectType.Message:
      objects = wellbore.messages;
      break;
    case ObjectType.MudLog:
      objects = wellbore.mudLogs;
      break;
    case ObjectType.Rig:
      objects = wellbore.rigs;
      break;
    case ObjectType.Risk:
      objects = wellbore.risks;
      break;
    case ObjectType.Trajectory:
      objects = wellbore.trajectories;
      break;
    case ObjectType.Tubular:
      objects = wellbore.tubulars;
      break;
    case ObjectType.WbGeometry:
      objects = wellbore.wbGeometrys;
      break;
  }
  return objects?.find((object) => object.uid === uid);
}
