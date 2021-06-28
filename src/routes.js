import Index from "views/Index.js";

import Login from "views/examples/Login.js";

import EmpProfile from "views/examples/EmpProfile";
import EmpLeaves from "views/examples/EmpLeaves";
import EmpMemos from "views/examples/EmpMemos";
import EmpPayslip from "views/examples/EmpPayslip";
import EmpMessg from "views/examples/EmpMessg";
import EmpInbox from "views/examples/EmpInbox";
import MemoList from "views/examples/MemoList";
import LeaveReq from "views/examples/LeaveReq";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: '/empProfile',
    name: 'Employee Profile',
    icon: "ni ni-tv-2 text-primary",
    component: EmpProfile,
    layout: '/admin',

  },
  {
    path: '/empLeaves',
    name: 'Leaves',
    icon: "ni ni-tv-2 text-primary",
    component: EmpLeaves,
    layout: '/admin',

  },
  {
    path: '/empMemos',
    name: 'Announcement & Memos',
    icon: "ni ni-tv-2 text-primary",
    component: EmpMemos,
    layout: '/admin',

  },
  {
    path: '/MemoList',
    name: 'Announcements',
    icon: "ni ni-tv-2 text-primary",
    component: MemoList,
    layout: '/admin',

  },
  {
    path: '/LeaveRequest',
    name: 'Leave Request',
    icon: "ni ni-tv-2 text-primary",
    component: LeaveReq,
    layout: '/admin',

  },
  {
    path: '/empPayslip',
    name: 'Payslip Records',
    icon: "ni ni-tv-2 text-primary",
    component: EmpPayslip,
    layout: '/admin',

  },
  {
    path: '/empMessg',
    name: 'Messages',
    icon: "ni ni-tv-2 text-primary",
    component: EmpMessg,
    layout: '/admin',

  },
  {
    path: '/empinbox',
    icon: "ni ni-tv-2 text-primary",
    component: EmpInbox,
    layout: '/admin',

  },


  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
 
  

];
export default routes;
