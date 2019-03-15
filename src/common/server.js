import grpcWeb from 'grpc-web';

import datacenter from '../protos/adverse_event_grpc_web_pb';
// // @ts-ignore
import {RepSearch, ResSearch,RepAdverseEventView,ResAdverseEvent,AdverseEventModel} from '../protos/adverse_event_pb';

let AdverseEventClient=datacenter.AdverseEventClient;

class EchoApp {

  constructor(AdverseEventClient) {
    this.echoService_ = AdverseEventClient;
  }

  search(params){
    return new Promise((resolve, reject) => {
      const request = new RepSearch();
      /*
       * 设置参数
       * 参数名称是id
       * setId()
       * */
      request.setKeyword(params.keyword);
      this.echoService_.search(
        request, null,
        (err, response) => {
          if (err) {
            console.log('失败');
            reject(err)
          } else {
            let {code,dataInfoList}=response.toObject();
            console.log(dataInfoList)
            resolve(dataInfoList)
          }
        }
      )
    })
  }
  view(params){
    return new Promise((resolve, reject) => {
      const request = new RepAdverseEventView();
      request.setId(params.id);
      this.echoService_.view(
        request, null,
        (err, response) => {
          if (err) {
            console.log('失败')
            reject(err)
          } else {
            let {code,dataInfoList}=response.toObject();

            resolve(dataInfoList[0])
          }
        }
      )
    })
  }
  save(params){
    return new Promise((resolve, reject) => {
      const request = new AdverseEventModel();
      request.setId(params.id?params.id:0);
      request.setDomainType(params.domainType);
      request.setDomainId(params.domainId);
      request.setDomainName(params.domainName);
      request.setDomainAddresss(params.domainAddresss);
      request.setDomainCreatetime(params.domainCreatetime);
      request.setPatientSex(params.patientSex);
      request.setPatientName(params.patientName);
      request.setPatientAge(params.patientAge);
      request.setPatientType(params.patientType);
      request.setPatientState(params.patientState);
      // request.setPatientStateMemo(params.patientStateMemo);
      request.setDisposeWorkerSex(params.disposeWorkerSex);
      request.setDisposeWorkerName(params.disposeWorkerName);
      request.setDisposeWorkerAge(params.disposeWorkerAge);
      request.setEventPlaceType(params.eventPlaceType);
      request.setEventPlace(params.eventPlace);
      request.setEventTime(params.eventTime);
      request.setEventScene(params.eventScene);
      request.setEventType(params.eventType);
      request.setEventMemo(params.eventMemo);
      request.setSymptom(params.symptom);
      request.setDispose(params.dispose);
      request.setDisposeWorkerType(params.disposeWorkerType);
      request.setDisposeWorkerTitle(params.disposeWorkerTitle);
      request.setEventLv(params.eventLv);
      request.setEventResult(params.eventResult);
      request.setEventReason(params.eventReason);
      request.setEventReasonMemo(params.eventReasonMemo);
      request.setFollowUpl(params.followUpl);
      request.setQcUserName(params.qcUserName);
      request.setQcUserAge(params.qcUserAge);
      request.setQcUserSex(params.qcUserSex);
      request.setQcUserType(params.qcUserType);
      request.setQcUserTitle(params.qcUserTitle);
      request.setPreventive(params.preventive);
      request.setPreventiveManager(params.preventiveManager);
      request.setAccidentLiability(params.accidentLiability);
      request.setPreventiveManagePost(params.preventiveManagePost);
      request.setPreventiveManageAge(params.preventiveManageAge);
      request.setPreventiveManageSex(params.preventiveManageSex);
      request.setPreventiveManageTitle(params.preventiveManageTitle);
      this.echoService_.save(
        request, null,
        (err, response) => {
          if (err) {
            console.log('失败')
            reject(err)
          } else {
            console.log(response.toObject())
            let {code,dataInfoList}=response.toObject();
            resolve(dataInfoList[0])
          }
        }
      )
    })
  }
}

//暂时http协议还无法访问
let echoService = new  AdverseEventClient('http://106.14.125.33:10000', null, null);
export const server = new EchoApp(echoService);
