import React, { useState } from "react";
import Navber from "./Navber";
import Cards from "./cards";

const Home = () => {
  return (
    <div className=" h-screen  w-full   bg-[#111113]  flex items-center text-center justify-start    flex-col  text-white  gap-y-4">
      <Navber />
      <div className=" flex flex-col gap-2">
        <h2 className="text-4xl font-semibold">
          Simple and Affordable <br />
          Pricing Plan's
        </h2>

        <p className=" font-medium text-[#ABABAD]">
          Start tracking and improving your finance managment
        </p>
      </div>

      <div className="w-full h-auto  flex items-center text-center justify-evenly">
        <Cards title={"Free"} button={"Start for Free"}  plan={"$0,00/month"}  content = {"Geate for trying our finament and for tiny eams"}  list1= {" Account Aggragation"}  list2 ={"Expense Tracking"} list3={"Budgeting Tools"} list4={" Transaction Insights"} list5={" Basic Security"}/>
        <Cards title={"Professional"}  role={"second"} button={"Sing up with Professional"} plan={"$98,00/month"}   content = {"Best for Growing startup and growth companies"}  list1= {" Everything in Free"}  list2 ={" Custmizable Dashboards"} list3={"Advanced Budgeting "} list4={"Investment Tracking"} list5={"Enhanced Security"}  />
        <Cards title={"Enterprise"}   button={"Sing up with Enterprise"}  plan={"$160,00/month"}  content = {"Best for larger companies and teams requiring high security"}  list1= {"Financial Planning Tools"}  list2 ={"Priority Support"} list3={" Premium Wdgets"} list4={"Advanced Security"} list5={" Intergration with 3rd-Party Pervices"} />
      </div>
    </div>
  );
};

export default Home;
