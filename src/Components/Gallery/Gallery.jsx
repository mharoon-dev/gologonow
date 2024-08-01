import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import ios from "../../../public/assets/gallery/apple-black-logo.png";
import amazon from "../../../public/assets/gallery/amazon_aws_logo_icon_145507.png";
import android from "../../../public/assets/gallery/android-logo.png";
import angular from "../../../public/assets/gallery/angular-logo-black-and-white.png";
import reactNative from "../../../public/assets/gallery/atom (1).png";
import react from "../../../public/assets/gallery/atom.png";
import mongodb from "../../../public/assets/gallery/brand_mongodb_icon_157872.png";
import node from "../../../public/assets/gallery/brand_node_icon_157859.png";
import mysql from "../../../public/assets/gallery/dbs-mysql_icon-icons.com_50909.png";
import firebase from "../../../public/assets/gallery/firebase_logo_icon_145278.png";
import flutter from "../../../public/assets/gallery/hire-flutter-trans-black.png";
import html from "../../../public/assets/gallery/html-5-logotype.png";
import swift from "../../../public/assets/gallery/swift.png";
import typescript from "../../../public/assets/gallery/typescript.png";
import vue from "../../../public/assets/gallery/vue.png";
import gradle from "../../../public/assets/gallery/gradle.png";
import java from "../../../public/assets/gallery/java.png";
import jenkins from "../../../public/assets/gallery/jenkins.png";
import linode from "../../../public/assets/gallery/linode.png";
import magento from "../../../public/assets/gallery/magento.png";
import microsoft from "../../../public/assets/gallery/microsoft.png";
import ocean_digital from "../../../public/assets/gallery/ocean_digital.png";
import shopify from "../../../public/assets/gallery/shopify.png";
import wordpress from "../../../public/assets/gallery/wordpress.png";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const galleryHeadingRef = useRef(null);

  const categories = [
    "All",
    "Mobile",
    "Backend",
    "Frontend",
    "Database",
    "Infra and devops",
    "CMS",
  ];

  const data = [
    { icon: ios, title: "IOS", category: "Mobile" },
    { icon: amazon, title: "AWS", category: "Infra and devops" },
    { icon: android, title: "Android", category: "Mobile" },
    { icon: angular, title: "Angular", category: "Frontend" },
    { icon: reactNative, title: "React Native", category: "Mobile" },
    { icon: react, title: "React", category: "Frontend" },
    { icon: mongodb, title: "MongoDB", category: "Database" },
    { icon: node, title: "Node", category: "Backend" },
    { icon: mysql, title: "MySQL", category: "Database" },
    { icon: firebase, title: "Firebase", category: "Backend" },
    { icon: flutter, title: "Flutter", category: "Mobile" },
    { icon: html, title: "HTML", category: "Frontend" },
    { icon: swift, title: "Swift", category: "Mobile" },
    { icon: typescript, title: "Typescript", category: "Frontend" },
    { icon: vue, title: "Vue", category: "Frontend" },
    { icon: gradle, title: "Gradle", category: "Infra and devops" },
    { icon: java, title: "Java", category: "Backend" },
    { icon: jenkins, title: "Jenkins", category: "Infra and devops" },
    { icon: linode, title: "Linode", category: "Infra and devops" },
    { icon: magento, title: "Magento", category: "Backend" },
    { icon: microsoft, title: "Microsoft", category: "Infra and devops" },
    {
      icon: ocean_digital,
      title: "Ocean Digital",
      category: "Infra and devops",
    },
    { icon: shopify, title: "Shopify", category: "CMS" },
    { icon: wordpress, title: "Wordpress", category: "CMS" },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (galleryHeadingRef.current) {
      observer.observe(galleryHeadingRef.current);
    }

    return () => {
      if (galleryHeadingRef.current) {
        observer.unobserve(galleryHeadingRef.current);
      }
    };
  }, []);

  return (
    <div className="galleryContainer">
      <h1 className="galleryheading" ref={galleryHeadingRef}>
        TECHNOLOGIES WE <span>WORK WITH.</span>
      </h1>

      <div className="categories">
        {categories.map((category) => (
          <h3
            key={category}
            className={`category ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </h3>
        ))}
      </div>

      <div className="items">
        {filteredData.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.icon} alt={item.title} className="item-icon" />
            <div className="item-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
