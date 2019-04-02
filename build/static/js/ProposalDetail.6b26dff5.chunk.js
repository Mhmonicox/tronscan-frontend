webpackJsonp([24],{2339:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(){var a=e.apply(this,arguments);return new Promise(function(e,t){function l(s,n){try{var r=a[s](n),o=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(o).then(function(e){l("next",e)},function(e){l("throw",e)});e(o)}return l("next")})}}function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function r(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function o(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var p=t(10),u=l(p),d=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),c=t(0),m=l(c),f=t(14),i=(t(16),t(15)),E=(t(27),t(11)),g=t(24),_=t(25),N=t(23),v=function(e){function a(){n(this,a);var e=r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.state={loading:!1},e}return o(a,e),d(a,[{key:"componentDidMount",value:function(){var e=this.props.match;this.load(e.params.id)}},{key:"load",value:function(){function e(e){return a.apply(this,arguments)}var a=s(u.default.mark(function e(a){var t,l,s,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,i.Client.getProposalById(a);case 3:t=e.sent,l=t.data,s=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee"];for(n in l.paramters)l.key=s[n],l.proposalVal=l.paramters[n];this.setState({proposal:l,loading:!1});case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.props,a=e.match,t=e.intl,l=this.state,s=l.proposal,n=l.loading;return m.default.createElement("main",{className:"container header-overlap"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-12 "},n?m.default.createElement("div",{className:"card"},m.default.createElement(g.TronLoader,null,(0,f.tu)("loading_address")," #",a.params.id)):m.default.createElement(c.Fragment,null,m.default.createElement("div",{className:"card list-style-header"},a.params.id&&m.default.createElement("div",{className:"card-body"},m.default.createElement("h5",{className:"card-title m-0"},"# ",a.params.id,"\xa0",(0,f.tu)("proposal"))),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-12"},m.default.createElement("table",{className:"table m-0"},s&&m.default.createElement("tbody",null,m.default.createElement("tr",null,m.default.createElement("th",null,(0,f.tu)("proposer"),":"),m.default.createElement("td",null,s.proposer.name?m.default.createElement(_.AddressLink,{address:s.proposer.address},s.proposer.name):m.default.createElement(_.AddressLink,{address:s.proposer.address},s.proposer.address))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,f.tu)("proposal_time_of_creation"),":"),m.default.createElement("td",null,m.default.createElement(E.FormattedDate,{value:Number(s.createTime)}),"\xa0",m.default.createElement(E.FormattedTime,{value:Number(s.createTime)}),"\xa0",m.default.createElement("span",null,"(UTC)"))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,f.tu)("proposal_time_of_expire"),":"),m.default.createElement("td",null,m.default.createElement(E.FormattedDate,{value:Number(s.expirationTime)}),"\xa0",m.default.createElement(E.FormattedTime,{value:Number(s.expirationTime)}),"\xa0",m.default.createElement("span",null,"(UTC)"))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,f.tu)("proposal_content_info"),":"),m.default.createElement("td",null,"getMaintenanceTimeInterval"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_1"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal/36e5)," \xa0",m.default.createElement("span",null,t.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_2"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal/N.ONE_TRX)," \xa0",m.default.createElement("span",null,"TRX")),"getCreateAccountFee"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_3"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal/N.ONE_TRX)," \xa0",m.default.createElement("span",null,"TRX")),"getTransactionFee"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_4"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal)," \xa0",m.default.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_5"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal/N.ONE_TRX)," \xa0",m.default.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_6"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal/N.ONE_TRX)," \xa0",m.default.createElement("span",null,"TRX")),"getWitnessStandbyAllowance"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_7"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal/N.ONE_TRX)," \xa0",m.default.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_8"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal/N.ONE_TRX)," \xa0",m.default.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_9"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal)," \xa0",m.default.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_10"})),m.default.createElement("span",{className:"col-green"},(0,f.tu)("propose_activate"))),"getRemoveThePowerOfTheGr"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_11"}))),"getEnergyFee"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_12"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal/N.ONE_TRX," TRX")),"getExchangeCreateFee"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_13"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal/N.ONE_TRX," TRX")),"getMaxCpuTimeOfOneTx"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_14"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal," ms")),"getAllowUpdateAccountName"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_15"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),s.proposalVal?m.default.createElement("span",{className:"col-green"},(0,f.tu)("propose_allowed")):m.default.createElement("span",{className:"col-green"},(0,f.tu)("propose_not_allowed"))),"getAllowSameTokenName"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_16"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),s.proposalVal?m.default.createElement("span",{className:"col-green"},(0,f.tu)("propose_allowed")):m.default.createElement("span",{className:"col-green"},(0,f.tu)("propose_not_allowed"))),"getAllowDelegateResource"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_17"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),s.proposalVal?m.default.createElement("span",{className:"col-green"},(0,f.tu)("propose_allowed")):m.default.createElement("span",{className:"col-green"},(0,f.tu)("propose_not_allowed"))),"getTotalEnergyLimit"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_18"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal)),"getAllowTvmTransferTrc10"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_19"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),s.proposalVal?m.default.createElement("span",{className:"col-green"},(0,f.tu)("propose_allowed")):m.default.createElement("span",{className:"col-green"},(0,f.tu)("propose_not_allowed"))),"getTotalEnergyLimitNew"==s.key&&m.default.createElement("div",{className:"proposal-message"},m.default.createElement("span",null,t.formatMessage({id:"propose_18_1"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",{className:"col-green"},s.proposalVal)),"getTotalEnergyCurrentLimit"==s.key&&m.default.createElement("div",null,m.default.createElement("span",null,t.formatMessage({id:"propose_20"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",null,s.proposalVal)),"getAllowMultiSign"==s.key&&m.default.createElement("div",null,m.default.createElement("span",null,t.formatMessage({id:"propose_21"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),s.proposalVal?m.default.createElement("span",null,(0,f.tu)("propose_allowed")):m.default.createElement("span",null,(0,f.tu)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==s.key&&m.default.createElement("div",null,m.default.createElement("span",null,t.formatMessage({id:"propose_22"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),s.proposalVal?m.default.createElement("span",null,(0,f.tu)("propose_allowed")):m.default.createElement("span",null,(0,f.tu)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==s.key&&m.default.createElement("div",null,m.default.createElement("span",null,t.formatMessage({id:"propose_23"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",null,s.proposalVal),"/",m.default.createElement("span",null,(0,f.tu)("propose_minute"))),"getTotalEnergyAverageUsage"==s.key&&m.default.createElement("div",null,m.default.createElement("span",null,t.formatMessage({id:"propose_24"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),s.proposalVal?m.default.createElement("span",null,m.default.createElement("span",null,s.proposalVal),"/",m.default.createElement("span",null,(0,f.tu)("propose_minute"))):m.default.createElement("span",null,(0,f.tu)("propose_unactivate"))),"getUpdateAccountPermissionFee"==s.key&&m.default.createElement("div",null,m.default.createElement("span",null,t.formatMessage({id:"propose_25"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",null,s.proposalVal/N.ONE_TRX)," \xa0",m.default.createElement("span",null,"TRX")),"getMultiSignFee"==s.key&&m.default.createElement("div",null,m.default.createElement("span",null,t.formatMessage({id:"propose_26"})),m.default.createElement("span",null,t.formatMessage({id:"proposal_to"})),m.default.createElement("span",null,s.proposalVal/N.ONE_TRX)," \xa0",m.default.createElement("span",null,"TRX")))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,f.tu)("proposal_status"),":"),m.default.createElement("td",null,"PENDING"==s.state&&m.default.createElement("div",null,m.default.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},(0,f.tu)("proposal_voting"))),"DISAPPROVED"==s.state&&m.default.createElement("div",null,m.default.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},(0,f.tu)("proposal_ineffective"))),"APPROVED"==s.state&&m.default.createElement("div",null,m.default.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},(0,f.tu)("proposal_effective"))),"CANCELED"==s.state&&m.default.createElement("div",null,m.default.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},(0,f.tu)("proposal_cancelled"))))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,f.tu)("approvers_of_the_proposal"),":"),m.default.createElement("td",null,s.approvals.length,"\xa0",m.default.createElement("span",null,(0,f.t)("total_approving_votes")))),m.default.createElement("tr",null,m.default.createElement("th",null),m.default.createElement("td",null,m.default.createElement("div",{className:"approvers-proposal"},s.approvals.map(function(e,a){return m.default.createElement("span",{key:a,className:"mt-1 approvers-proposal-item"},e.name?m.default.createElement(_.AddressLink,{address:e.address},e.name):m.default.createElement(_.AddressLink,{address:e.address},e.address))})))))))))))))}}]),a}(m.default.Component);a.default=(0,E.injectIntl)(v)}});