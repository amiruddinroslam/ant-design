"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{266047:function(l,i,e){e.r(i);var u=e(502143),r=e(968521),m=e(659378),h=e(28840),t=e(374912),g=e(828089),c=e(902068),E=e(574399),P=e(863942),M=e(316073),x=e(24628),D=e(719260),O=e(956140),v=e(905388),Z=e(147341),p=e(606965),C=e(249706),f=e(795127),I=e(116846),A=e(73024),s=e(606641),a=e(667294),n=e(370917);function o(){var d=(0,s.eL)(),_=d.texts;return(0,n.tZ)(s.dY,null,(0,n.tZ)(a.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,_[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,_[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(s.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"how-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,n.tZ)("h3",{id:"basic-usage"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage"},(0,n.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,n.tZ)("p",null,_[2].value,(0,n.tZ)("code",null,_[3].value),_[4].value),(0,n.tZ)(t.Z,{lang:"tsx"},_[5].value),(0,n.tZ)("p",null,_[6].value),(0,n.tZ)("h3",{id:"sequence-with-configprovider"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider"},(0,n.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,n.tZ)("p",null,_[7].value,(0,n.tZ)("code",null,_[8].value),_[9].value),(0,n.tZ)(t.Z,{lang:"tsx"},_[10].value),(0,n.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,n.tZ)(t.Z,{lang:"tsx"},_[11].value),(0,n.tZ)("h3",{id:"global-scene-redux-scene"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene"},(0,n.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,n.tZ)(t.Z,{lang:"tsx"},_[12].value),(0,n.tZ)(t.Z,{lang:"tsx"},_[13].value))))}i.default=o}}]);
