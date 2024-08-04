import About from "@/components/about/About";
import HeaderFour from "@/components/headers/HeaderFour";
import HeaderThree from "@/components/headers/HeaderThree";
import PersonalInfo from "@/components/personalInfo/PersonalInfo";
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Blogs from "@/components/blogs/Blogs";




import React from "react";

export const metadata = {
  title: "Home|| Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};

export default function Home3() {
  return (
    <>
      <div className="page-wrapper home">
        <HeaderFour />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <HeaderThree />
              <About />
              <Resume />
              <Portfolio />
              <Blogs />
              <Contact />
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
