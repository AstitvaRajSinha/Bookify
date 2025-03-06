
"use client";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { GoUpload } from "react-icons/go";
import logo  from '../assets/bookify-logo-zip-file/svg/logo-no-background.svg'
import { MdOutlineDashboard, MdOutlineTableChart } from "react-icons/md";
import { IoLibraryOutline,IoHelpBuoyOutline, IoDocumentAttachOutline, IoLogInOutline } from "react-icons/io5";
export default function Component() {
  return (
    <Sidebar className="h-screen" aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        <Sidebar.Logo href="/"  img={logo} imgAlt="Flowbite logo">
        
      </Sidebar.Logo>
          {/* <Sidebar.Item href="/admin/dashboard" icon={MdOutlineDashboard}>
            Dashboard
          </Sidebar.Item> */}
          <Sidebar.Item href="/admin/dashboard/upload" icon={GoUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={IoLibraryOutline}>
          Manage Book
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item> */}
          <Sidebar.Item href="/login" icon={IoLogInOutline}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={MdOutlineTableChart}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {/* <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item> */}
          <Sidebar.Item href="/admin/dashboard/docs" icon={IoDocumentAttachOutline

          }>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={IoHelpBuoyOutline}>
            MainPage
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
